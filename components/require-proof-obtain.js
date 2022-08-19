import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ObtainQRDisplay from './obtain-qr';

export default function RequireProofObtain({ onPresentedProof }) {
  const [proofRequest, setProofRequest] = useState();

  async function getProofRequest() {
    const { data } = await axios.get('/api/proof-request?type=proofOfEmployment');
    if (!proofRequest) {
      setProofRequest(data);
      setTimeout(() => checkProofRequest(data), 1000);
    }
  }

  async function checkProofRequest(request) {
    const { data } = await axios.get(`/api/proof-request?id=${request.id}`);
    const { verified } = data;
    if (verified) {
      onPresentedProof(data);
    } else {
      setTimeout(() => checkProofRequest(request), 1000);
    }
  }

  useEffect(() => {
    if (!proofRequest) {
      getProofRequest();
    }
  }, [proofRequest]);

  function getQRURL(request) {
    return `dockwallet://proof-request?url=${encodeURIComponent(request.response_url)}&nonce=${encodeURIComponent(request.nonce)}`;
  }

  return proofRequest ? (
    <ObtainQRDisplay value={getQRURL(proofRequest)} />
  ) : (
    <ObtainQRDisplay />
  );
}
