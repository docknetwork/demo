import axios from 'axios';

export default async (req, res) => {
  // console.log('req', req.params, req.headers, req.body)

  if (req.method !== 'POST') {
    res.status(200);
  }

  const data = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  const headers = { ...req.headers };
  delete headers.host;
  headers['content-type'] = 'application/ssi-agent-wire';

  console.log('req.body', data, req.body === 'string', headers);

  try {
    const result = await axios.post('https://vas.evernym.com/agency/msg', JSON.stringify(data), {
      headers,
    });

    console.log('result', result.status, result.data, result.headers);
    // res.setHeader('Content-Type', 'application/json')

    res.status(result.status).send(result.data);
  } catch (e) {
    console.error(e.message);
    res.status(400).json({ error: e.message });
  }
};
