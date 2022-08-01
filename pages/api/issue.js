
import axios from 'axios';

const axiosHeaders = {
  headers: {
    'DOCK-API-TOKEN': process.env.DOCK_API_TOKEN,
  }
};

const baseUrl = process.env.DOCK_API_URL;
const issuerDID = process.env.DOCK_API_DID;

export default async (req, res) => {
  if (req.method !== 'POST') {
    res.status(200).json({});
    return;
  }

  const {
    subjectName = 'Alice Doe',
    subjectEmail = 'alice@dock.io',
    // type = 'employeeid',
  } = (req.body || {});

  const result = await axios.post(`${baseUrl}/credentials`, {
    "anchor": false,
    "persist": false,
    "credential": {
      "name": "Acme Employee ID",
      "type": [
        "VerifiableCredential",
        "EmployeeIDCredential"
      ],
      "issuer": issuerDID,
      "subject": {
        "name": subjectName,
        "email": subjectEmail,
        "employeeId": 123456
      }
    }
  }, axiosHeaders);

  res.json(result.data);
}