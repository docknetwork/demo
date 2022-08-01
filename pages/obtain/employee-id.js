import React, { useState } from 'react';
import { useRouter } from 'next/router';
import QRCode from 'react-qr-code';

import ObtainFlow from '../../components/obtain-flow';

const SERVER_URL = process.env.SERVER_URL || process.env.VERCEL_URL || 'http://localhost:3000';

function ObtainQRDisplay({ value }) {
  return (
    <div className="flex justify-center items-center flex-col">
      <div style={{ background: 'white', padding: '16px' }}>
        <QRCode value={value} />
      </div>
      {/* <div className="mt-6 md:mt-6 w-full flex justify-center md:hidden">
        <a href={value} className="block px-6 bg-blue-600 mt-5 py-3 rounded-full hover:bg-blue-700 hover:-translate-y-1 transition-all duration-250 text-white font-semibold mb-2 text-xl">
          Open Deep Link
        </a>
      </div> */}
    </div>
  );
}

function EmployeeIDOBtain() {
  const deepLinkVal = `${SERVER_URL}/api/issue`;
  return (
    <>
      <ObtainQRDisplay value={deepLinkVal} />
    </>
  );
}

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
      children: <EmployeeIDOBtain />,
      btnText: 'Got it, take me back!',
      onClick: () => {
        router.push('/dashboard');
      },
    },
  ];

  return <ObtainFlow {...{ step, setStep, credentialSteps }} />;
}
