import axios from 'axios';

const axiosHeaders = {
  headers: {
    'DOCK-API-TOKEN': process.env.DOCK_API_TOKEN,
  },
};

const baseUrl = process.env.DOCK_API_URL;
const issuerDID = process.env.DOCK_API_DID;

export default async (req, res) => {
  if (req.method !== 'POST' && req.method !== 'GET') {
    res.status(400).json({});
    return;
  }

  try {
    const result = await axios.post(
      `${baseUrl}/credentials`,
      {
        anchor: false,
        persist: true,
        password: 'dock',
        credential: {
          name: 'Web Training Certificate',
          type: ['VerifiableCredential', 'WebTrainingCertificate'],
          issuer: {
            id: issuerDID,
            name: '3rd Party Company',
          },
          subject: {
            name: 'Alice Doe',
            email: 'alice@dock.io',
            course: 'The Best Web Training',
          },
        },
      },
      axiosHeaders
    );

    res.redirect(307, `${result.data.id}?p=${Buffer.from('dock').toString('base64')}`);
  } catch (e) {
    console.error(e);
    res.status(400).json({ error: e.message });
  }
};
