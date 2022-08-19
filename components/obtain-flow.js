import React from 'react';
import Layout from './layout';
import InfoAlert from './info-alert';

function FlowStep({ title, description, btnText = 'Get My Credential', children, onClick }) {
  return (
      <div
        className="container mx-auto flex justify-center items-center px-4 md:px-10 py-10 w-full">
        <div className=" px-3 md:px-4 py-12 flex flex-col justify-center items-center bg-neutral-100 w-full rounded-lg">
          <h1 className="text-3xl lg:text-4xl font-semibold leading-10 text-center text-gray-800 text-center md:w-9/12 lg:w-7/12">
            {title}
          </h1>
          <p className="mt-5 text-base leading-normal text-center text-gray-600 md:w-9/12 lg:w-7/12 ">
            {description}
          </p>
          {children}

          {onClick && (
            <div className="mt-6 md:mt-6 w-full flex justify-center">
              <button onClick={onClick} className="block px-6 bg-blue-600 mt-5 py-3 rounded-full hover:bg-blue-700 hover:-translate-y-1 transition-all duration-250 text-white font-semibold mb-2 text-xl">
                {btnText}
              </button>
            </div>
          )}
        </div>
      </div>
  );
}

export default function ObtainFlow({ step, setStep, credentialSteps }) {
  const currentStep = credentialSteps[step];

  function handleNextStep() {
    setStep(step + 1);
  }

  return (
    <Layout title="Get your credential">
      <div className="px-3 md:lg:xl:px-10">
        <InfoAlert>
          On this page you can obtain a credential which can then be used to present as a proof for portal services.
        </InfoAlert>
      </div>

      {currentStep && (
        <FlowStep {...currentStep} onClick={currentStep.onClick || (currentStep.nextBtn ? handleNextStep : undefined)} />
      )}
    </Layout>
  );
}
