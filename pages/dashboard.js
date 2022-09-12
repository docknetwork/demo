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
      <span className="text-white">
        <svg
          width="72"
          height="72"
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect width="72" height="72" rx="36" fill="#DBEAFE" />
          <path d="M49.9987 54H22.0012V18H49.9987V54Z" fill="#0063F7" />
          <circle r="4" transform="matrix(-1 0 0 1 36 31)" fill="white" />
          <path d="M28 45H44C41.8746 35.6205 29.9428 35.7129 28 45Z" fill="#93C5FD" />
          <path d="M50 28L40 18H50V28Z" fill="black" />
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
      <span className="text-white">
        <svg
          width="72"
          height="72"
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect width="72" height="72" rx="36" fill="#DBEAFE" />
          <path
            d="M52.8906 19.1172L56.4258 22.6523L36 43.0742L32.4648 39.5391L52.8906 19.1172Z"
            fill="black"
          />
          <path d="M51 21V51H21V21H51Z" fill="#0063F7" />
          <path d="M36 14.9375L57.0625 36L36 57.0625L14.9375 36L36 14.9375Z" fill="#0063F7" />
          <path d="M51 21L32.4648 39.5391L36 43.0781L51 28V21Z" fill="#BFDBFE" />
          <path
            d="M26.8555 33.9297L30.3906 30.3945L39.5352 39.5391L36 43.0781L26.8555 33.9297Z"
            fill="#BFDBFE"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M36 43.0783L39.5352 39.5392L36.0004 36.0044L32.4648 39.5392L36 43.0783Z"
            fill="white"
          />
        </svg>
      </span>
    ),
    requires: ['Employee ID'],
  },
  {
    slug: 'training-certificate',
    title: 'Training Certificate',
    description:
      'Congratulations on passing the training course! Obtain a credential for it here with a web/pdf option',
    icon: (
      <span className="text-white">
        <svg
          width="72"
          height="72"
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect width="72" height="72" rx="36" fill="#DBEAFE" />
          <path d="M15 20V52H57V20H15Z" fill="#0063F7" />
          <path d="M40 43H32V56L36.0001 53.5715L40 56V43Z" fill="#0063F7" />
          <path
            d="M19 26.7692V45.2308C20.1069 46.3126 20.7264 46.9182 21.8333 48H50.1667C51.2736 46.9182 51.8931 46.3126 53 45.2308V26.7692C51.8931 25.6874 51.2736 25.0818 50.1667 24H21.8333C20.7264 25.0818 20.1069 25.6874 19 26.7692Z"
            fill="white"
          />
          <path d="M44 28H28V31H44V28Z" fill="black" />
          <path d="M49 34H23V37H49V34Z" fill="black" />
          <path d="M27 41H23V44H27V41Z" fill="black" />
          <path d="M49 41H45V44H49V41Z" fill="black" />
          <path d="M40 43H32V52H40V43Z" fill="black" />
          <path
            d="M36 49.064C38.7614 49.064 41 46.8254 41 44.064C41 41.3025 38.7614 39.064 36 39.064C33.2386 39.064 31 41.3025 31 44.064C31 46.8254 33.2386 49.064 36 49.064Z"
            fill="#93C5FD"
          />
        </svg>
      </span>
    ),
    requires: [],
  },
];

function CredentialSelector() {
  const router = useRouter();

  function handleClickOffer({ slug }) {
    router.push(`/obtain/${slug}`);
  }

  return (
    <div className="px-3 md:lg:xl:px-10 py-5 bg-opacity-10">
      <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white shadow-xl border rounded-lg">
        {credentialOffers.map((offer) => (
          <div
            key={offer.slug}
            onClick={() => handleClickOffer(offer)}
            className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            {offer.icon}
            <p className="text-xl font-medium text-slate-700 mt-3">{offer.title}</p>
            <p className="mt-2 text-sm text-slate-500">{offer.description}</p>
            <div className="flex flex-wrap justify-center items-center space-x-2 mt-4">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9 4C9 4.55228 8.55228 5 8 5C7.44772 5 7 4.55228 7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4ZM7 7C6.44772 7 6 7.44772 6 8C6 8.55229 6.44772 9 7 9V12C7 12.5523 7.44772 13 8 13H9C9.55228 13 10 12.5523 10 12C10 11.4477 9.55228 11 9 11V8C9 7.44772 8.55228 7 8 7H7Z"
                  fill="#0063F7"
                />
              </svg>

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
      <div className="w-full shadow-xl border py-10 px-14 my-10 flex justify-between items-center rounded-lg">
        <p className="text">
          {' '}
          <span className="text-3xl font-medium">Talk to us</span> <br />
          <span className="text-md">
            Contact us at Dock to book a consultation call, we also offer a no code solution
          </span>
        </p>
        <a
          href="https://dock.io/contact"
          target="_blank"
          type="submit"
          style={{ width: '158px' }}
          className="text-center block bg-blue-600 mt-auto mb-auto py-2 rounded-full hover:bg-blue-700 hover:-translate-y-1 transition-all duration-250 text-white font-semibold"
          rel="noreferrer">
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <Layout title="My Credentials">
      <div className="px-3 md:lg:xl:px-10">
        <InfoAlert>
          This interactive demo shows how Dock can be used to issue and manage verifiable
          credentials for a fake company. Contact us for other use cases.
        </InfoAlert>
      </div>
      <CredentialSelector />
    </Layout>
  );
}
