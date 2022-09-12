import React from 'react';
import { useRouter } from 'next/router';

import InfoAlert from '../components/info-alert';

export default function Home() {
  const router = useRouter();

  function handleFormSubmit(e) {
    e.preventDefault();
    router.push('/dashboard');
  }

  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row lg:h-screen">
        <div
          className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8"
          style={{ width: '100%' }}>
          <div className="w-full px-8 md:px-32 lg:px-24">
            <form
              onSubmit={handleFormSubmit}
              className="p-5"
              method="GET"
              action="/dashboard"
              style={{ maxWidth: '500px', margin: '0 auto' }}>
              <h1 className="text-gray-800 font-bold text-2xl mb-6">Sign into the demo portal</h1>
              <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
                <input
                  id="email"
                  className=" pl-2 w-full outline-none border-none"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value="alice@dock.io"
                />
              </div>

              <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  className="pl-2 w-full outline-none border-none"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value="thisisverysecure"
                />
              </div>

              <button
                type="submit"
                className="block w-full bg-blue-600 mt-5 py-2 rounded-full hover:bg-blue-700 hover:-translate-y-1 transition-all duration-250 text-white font-semibold mb-2">
                Authorize
              </button>

              <br />

              <InfoAlert>Any email and password will work for this demo</InfoAlert>
            </form>
          </div>
        </div>
        <div
          className="lg:flex w-full lg:w-1/2 justify-around items-center text-center bg-zinc-900"
          style={{
            flexShrink: 0,
            background: 'url(/bg.jpg);',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}>
          <div
            className="w-full mx-auto px-0 py-10 flex-col items-center space-y-6"
            style={{
              maxWidth: '400px',
              width: '100%',
            }}>
            <h1 className="text-white font-bold text-4xl">
              Demo Verifiable Credential technology for trusted digital interactions
            </h1>

            <p className="text-white mt-1">
              In this interactive demo you will see how Dock&apos;s technology can be used to solve
              real world problems. Verifiable Credentials allow users to interact with various
              services in a trusted manner and prove to others their attestations. This is just one
              use case of many.
            </p>
            <br />
            <br />
            <h3 className="text-white font-bold">
              Get the Dock Wallet to store and manage credentials
            </h3>

            <div className="flex">
              <div className="flex w-full ml-4 justify-around items-center p-2">
                <a
                  data-w-id="d362f523-4769-a52a-7897-ad455d324f08"
                  href="https://apps.apple.com/ph/app/dock-wallet/id1565227368"
                  target="_blank"
                  className="mr-2"
                  rel="noreferrer">
                  <img
                    src="https://uploads-ssl.webflow.com/5e97941735e37a5ef19d10aa/62874177177afb45315d5c6a_Frame.png"
                    loading="lazy"
                    width="178"
                    alt=""
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.dockapp"
                  target="_blank"
                  rel="noreferrer">
                  <img
                    src="https://uploads-ssl.webflow.com/5e97941735e37a5ef19d10aa/62874176e24abd6ceb8583ca_Frame%20255.png"
                    loading="lazy"
                    width="178"
                    data-w-id="d362f523-4769-a52a-7897-ad455d324f0b"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
