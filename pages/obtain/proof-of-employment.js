import React, { useState } from 'react';
import { useRouter } from 'next/router';

import ObtainFlow from '../../components/obtain-flow';
import ObtainQRDisplay from '../../components/obtain-qr';
import RequireProofObtain from '../../components/require-proof-obtain';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000';

export default function ObtainProofOfEmployment() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [proof, setProof] = useState();

  function handleGotProof(data) {
    setProof(data);
    setStep(step + 1);
  }

  const credentialSteps = [
    {
      title: 'Proof of Employment',
      description: (
        <>
          As an employee of Acme Inc, you are entitled to receive a proof of employment credential.
          <br />
          You can use this credential to present to banks and credit agencies to verify your
          employment status.
          <br />
          <br />
          You are required to already have an Employee ID credential.
        </>
      ),
      nextBtn: true,
      btnText: 'Obtain Proof of Employment',
    },
    {
      title: 'Do you have an Employee ID?',
      description: (
        <>
          Please confirm that you have an Employee ID credential stored in your wallet before
          proceeding
        </>
      ),
      children: (
        <div className="mt-6 md:mt-6 w-full flex justify-center">
          <button
            onClick={() => router.push('/obtain/employee-id')}
            className="mr-4 block px-8 mt-5 py-3 rounded-full hover:bg-blue-700 hover:-translate-y-1 transition-all duration-250 text-white font-semibold mb-2 text-xl bg-transparent text-blue-700 font-semibold hover:text-white border border-blue-600 hover:border-transparent">
            No
          </button>
          <button
            onClick={() => setStep(step + 1)}
            className="block px-8 bg-blue-600 mt-5 py-3 rounded-full hover:bg-blue-700 hover:-translate-y-1 transition-all duration-250 text-white font-semibold mb-2 text-xl">
            Yes
          </button>
        </div>
      ),
    },
    {
      title: 'Present your Employee ID',
      description: (
        <>
          Scan the QR code below to present your Employee ID credential which will be verified.
          <br />
          You will then you will be issued a proof of employment credential.
          <br />
          <br />
        </>
      ),
      children: <RequireProofObtain type="proofOfEmployment" onPresentedProof={handleGotProof} />,
      // btnText: 'Got it, take me back!',
      // onClick: () => {
      //   router.push('/dashboard');
      // },
    },
    {
      title: 'Employee ID has been verified',
      description: (
        <>
          Employee ID has been verified successfully
          <br />
          Scan the QR code below to receive your Proof of Employment credential.
          <br />
          <br />
        </>
      ),
      children: proof && (
        <ObtainQRDisplay
          value={`${SERVER_URL}/api/issue?type=proofOfEmployment&proofId=${proof.id}`}
        />
      ),
      btnText: 'Got it, take me back!',
      onClick: () => {
        console.log(`${SERVER_URL}/api/issue?type=proofOfEmployment&proofId=${proof.id}`);
        router.push('/dashboard');
      },
    },
  ];

  return <ObtainFlow {...{ step, setStep, credentialSteps }} />;
}
