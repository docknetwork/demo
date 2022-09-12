import axios from 'axios';

const axiosHeaders = {
  headers: {
    'DOCK-API-TOKEN': process.env.DOCK_API_TOKEN,
  },
};

const baseUrl = process.env.DOCK_API_URL;
const issuerDID = process.env.DOCK_API_DID;

const credentialTypes = {
  employeeId({ subjectName, subjectEmail }) {
    return {
      name: 'Acme Employee ID',
      type: ['VerifiableCredential', 'EmployeeIDCredential'],
      issuer: issuerDID,
      subject: {
        name: subjectName,
        email: subjectEmail,
        employeeId: 123456,
      },
    };
  },
  proofOfEmployment({ name, email, employeeId }) {
    return {
      name: 'Acme Proof of Employment',
      type: ['VerifiableCredential', 'ProofOfEmploymentCredential'],
      issuer: issuerDID,
      subject: {
        name,
        email,
        employeeId,
      },
    };
  },
};

export default async (req, res) => {
  if (req.method !== 'POST' && req.method !== 'GET') {
    res.status(400).json({});
    return;
  }

  const { subjectName = 'Alice Doe', subjectEmail = 'alice@dock.io' } = req.body || {};

  const proofId = req.query.proofId;
  const type = req.query.type || 'employeeId';
  const credFn = credentialTypes[type];
  if (!type) {
    res.status(400).json({ error: 'Invalid type' });
    return;
  }

  let credentialData;
  if (type !== 'employeeId') {
    let proof;
    try {
      const { data } = await axios.get(`${baseUrl}/proof-requests/${proofId}`, axiosHeaders);
      proof = data.verified && data;
    } catch (e) {
      console.error(e);
    }

    if (proof) {
      const userCredential = proof.presentation.credentials[0];

      // Extra checking that we are the issuer of the credential
      const issuerId =
        typeof userCredential.issuer === 'object'
          ? userCredential.issuer.id
          : userCredential.issuer;
      if (issuerId !== issuerDID) {
        res.status(400).json({ error: 'Invalid issuer' });
        return;
      }

      // Extra checking of credential type
      if (userCredential.type.indexOf('EmployeeIDCredential') !== 1) {
        res.status(400).json({ error: 'Invalid credential type' });
        return;
      }

      credentialData = credFn(userCredential.credentialSubject);
    } else {
      res.status(400).json({ error: 'Requires proof' });
      return;
    }
  } else {
    credentialData = credFn({ subjectName, subjectEmail });
  }

  try {
    const result = await axios.post(
      `${baseUrl}/credentials`,
      {
        anchor: false,
        persist: false,
        credential: credentialData,
      },
      axiosHeaders
    );

    res.json(result.data);
  } catch (e) {
    console.error(e);
    res.status(400).json({ error: e.message });
  }
};
