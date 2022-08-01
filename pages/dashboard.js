import React from 'react';
import { useRouter } from 'next/router';

import Layout from '../components/layout';
import InfoAlert from '../components/info-alert';

const credentialOffers = [
  {
    slug: 'employee-id',
    title: 'Employee ID',
    description:
      'First day on the job? Get yourself a digital employee ID to access secure online services',
    icon: (
      <span className="p-5 rounded-full bg-indigo-500 text-white shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      </span>
    ),
    requires: [],
  },
  {
    slug: 'proof-of-employment',
    title: 'Proof of Employment',
    description: 'Prove to banks and organisations that you have gainful employment with Acme Inc',
    icon: (
      <span className="p-5 rounded-full bg-red-500 text-white shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </span>
    ),
    requires: ['Employee ID'],
  },
  {
    slug: 'training-certificate',
    title: 'Training Certificate',
    description: 'Congratulations on passing the training course! Obtain a credential for it here',
    icon: (
      <span className="p-5 rounded-full bg-orange-500 text-white shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      </span>
    ),
    requires: ['Employee ID'],
  },
];

function CredentialSelector() {
  const router = useRouter();

  function handleClickOffer({ slug }) {
    router.push(`/obtain/${slug}`);
  }

  return (
    <div className="px-3 md:lg:xl:px-10 py-10 bg-opacity-10">
      <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white shadow-xl border ">
        {credentialOffers.map((offer) => (
          <div
            key={offer.slug}
            onClick={() => handleClickOffer(offer)}
            className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            {offer.icon}
            <p className="text-xl font-medium text-slate-700 mt-3">{offer.title}</p>
            <p className="mt-2 text-sm text-slate-500">{offer.description}</p>
            <div className="flex flex-wrap justify-center items-center space-x-2 mt-4">
              {offer.requires.length ? (
                <>
                  <span className="text-gray-500 font-semibold text-xs">Requires:</span>
                  {offer.requires.map((req) => (
                    <span
                      key={req}
                      className="px-3 py-1 rounded-lg border border-gray-300 text-gray-500 font-semibold text-xs flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                      {req}
                    </span>
                  ))}
                </>
              ) : (
                <span className="text-gray-500 font-semibold text-xs mt-1">No requirements</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full   bg-indigo-600 shadow-xl py-10 px-20 flex justify-between items-center">
        <p className=" text-white">
          {' '}
          <span className="text-4xl font-medium">Talk to us</span> <br />
          <span className="text-lg">Contact us at Dock to book a consultation call</span>
        </p>
        <button className="px-5 py-3  font-medium text-slate-700 shadow-xl  hover:bg-white duration-150  bg-yellow-400">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <Layout title="My Credentials">
      <InfoAlert>
        This interactive demo shows how Dock can be used to issue and manage verifiable credentials
        for a fake company. Contact us for other use cases.
      </InfoAlert>
      <CredentialSelector />
    </Layout>
  );
}
