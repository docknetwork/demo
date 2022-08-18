import axios from 'axios';

const axiosHeaders = {
  headers: {
    'DOCK-API-TOKEN': process.env.DOCK_API_TOKEN,
  },
};

const baseUrl = process.env.DOCK_API_URL;

const proofRequestTypes = {
  proofOfEmployment: {
    attributes: {
      employeeId: {
        name: 'employeeId',
      },
      name: {
        name: 'name',
      },
      email: {
        name: 'email',
      },
    },
    name: 'Employee ID proof request',
    nonce: '1234',
  },
};

export default async (req, res) => {
  if (req.method !== 'GET') {
    res.status(200).json({});
    return;
  }

  // Checking existing proof request
  if (req.query.id) {
    try {
      const result = await axios.get(`${baseUrl}/proof-requests/${req.query.id}`, axiosHeaders);
      res.json(result.data);
      return;
    } catch (e) {
      res.status(400).json({ error: e.message });
      return;
    }
  }

  // Create new proof request
  const requestType = proofRequestTypes[req.query.type];
  if (!requestType) {
    res.status(400).json({ error: 'Invalid proof request type' });
    return;
  }

  try {
    const result = await axios.post(`${baseUrl}/proof-requests`, requestType, axiosHeaders);
    res.json(result.data);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};
