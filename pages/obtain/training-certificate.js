import React from 'react';
import { useRouter } from 'next/router';

import ObtainFlow from '../../components/obtain-flow';

export default function ObtainProofOfEmployment() {
  const router = useRouter();
  const credentialSteps = [
    {
      title: 'Training Certificate',
      description: (
        <>
          You have completed a training course for a 3rd party, and they have issued you an online
          certificate. You can scan this certificate&apos;s QR code to import it into your wallet.
          <br />
          <br />
          The password for this certificate is <strong>dock</strong>.
          <br />
          <br />
          This demonstrates persistent credentials and templating in{' '}
          <a href="https://certs.dock.io" target="_blank" rel="noreferrer">
            Dock Certs
          </a>
          .
        </>
      ),
      nextBtn: true,
      btnText: 'View Certificate',
      onClick: () => {
        router.push('/api/get-certificate');
      },
    },
  ];

  return <ObtainFlow {...{ step: 0, credentialSteps }} />;
}
