import React from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  function handleFormSubmit(e) {
    e.preventDefault();
    router.push('/dashboard');
  }

  return (
    <>
      <div className="h-screen flex">
        <div
          className="lg:flex w-full lg:w-1/2 justify-around items-center text-center bg-zinc-900"
          style={{
            maxWidth: '600px',
            flexShrink: 0,
          }}>
          <div className="w-full mx-auto px-20 flex-col items-center space-y-6">
            <h1 className="text-white font-bold text-4xl">
              Experience a world of more trusted digital interactions.
            </h1>

            <p className="text-white mt-1">
              Welcome! In this interactive demo, we’ll see how trusted digital credentials can
              streamline the processes behind everyday life and empower people with control over
              their digital information.
            </p>
            <br />
            <br />
            <h3 className="text-white font-bold text-base">
              Get the Dock Wallet to store and manage credentials
            </h3>

            <div className="flex">
              <img
                src="https://uploads-ssl.webflow.com/5e97941735e37a5ef19d10aa/628741766ee898458654a82a_dock%20wallet%20app%20icon.png"
                loading="lazy"
                width="88"
                alt=""></img>
              <div className="flex w-full bg-gray-900 rounded-lg ml-4 justify-around items-center p-2 bg-neutral-800">
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
        <div
          className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8"
          style={{ width: '100%' }}>
          <div className="w-full px-8 md:px-32 lg:px-24">
            <form
              onSubmit={handleFormSubmit}
              className="bg-white rounded-md shadow-2xl p-5"
              method="GET"
              action="/dashboard"
              style={{ maxWidth: '500px', margin: '0 auto' }}>
              <h1 className="text-gray-800 font-bold text-2xl mb-6">
                Sign into the employee portal
              </h1>
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
              <div className="flex justify-between mt-6">
                <span className="text-sm ml-2">
                  <i>Any email/password will work for this demo</i>
                </span>

                <a
                  href="https://dock.io"
                  className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-250 transition-all">
                  Learn more
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
