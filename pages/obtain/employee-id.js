import React, { useState } from 'react';
import { useRouter } from 'next/router';

import ObtainFlow from '../../components/obtain-flow';
import ObtainQRDisplay from '../../components/obtain-qr';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000';

export default function ObtainEmployeeID() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const credentialSteps = [
    {
      title: 'Acme Inc Employee ID',
      description: (
        <>
          You are an employee of Acme Inc and are requestng a digital Employee ID.
          <br />
          You can use this credential to authorize yourself with the portal services.
        </>
      ),
      nextBtn: true,
    },
    {
      title: 'Acme Inc Employee ID',
      description: (
        <>
          Scan the QR code below or click the deep link if you are on a mobile device to obtain your
          credential.
          <br />
          <br />
        </>
      ),
      children: <ObtainQRDisplay value={`${SERVER_URL}/api/issue?type=employeeId`} />,
      btnText: 'Got it, take me back!',
      onClick: () => {
        router.push('/dashboard');
      },
    },
  ];

  return <ObtainFlow {...{ step, setStep, credentialSteps }} />;
}
