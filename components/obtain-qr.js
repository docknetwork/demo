import React from 'react';
import QRCode from 'react-qr-code';

export default function ObtainQRDisplay({ value }) {
  return value ? (
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
  ) : (
    <div className="flex justify-center items-center flex-col">
      <div style={{ background: 'white', padding: '16px', width: '256px', height: '256px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Loading
      </div>
    </div>
  );
}
