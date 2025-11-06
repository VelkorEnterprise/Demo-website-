'use client';

import { useState } from 'react';

export default function Services() {
  const services = [
    { name: 'Merge PDF', description: 'Combine multiple PDFs into one.' },
    { name: 'Split PDF', description: 'Extract pages from a PDF.' },
    { name: 'Compress PDF', description: 'Reduce the file size of a PDF.' },
    {
      name: 'PDF to Word',
      description: 'Convert a PDF to an editable Word document.',
    },
    { name: 'Word to PDF', description: 'Convert a Word document to a PDF.' },
    { name: 'PDF to JPG', description: 'Convert a PDF to a JPG image.' },
    { name: 'JPG to PDF', description: 'Convert a JPG image to a PDF.' },
  ];

  const [showPopup, setShowPopup] = useState(false);
  const [activeService, setActiveService] = useState('');

  const handleServiceClick = (serviceName: string) => {
    if (serviceName !== 'Merge PDF') {
      setActiveService(serviceName);
      setShowPopup(true);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <div
          key={service.name}
          className="bg-base-100 rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer"
          onClick={() => handleServiceClick(service.name)}
        >
          <h3 className="text-xl font-bold text-neutral">{service.name}</h3>
          <p className="text-neutral-light">{service.description}</p>
        </div>
      ))}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-base-100 p-8 rounded-xl shadow-2xl">
            <h2 className="text-2xl font-bold mb-4 text-neutral">
              {activeService} - Coming Soon!
            </h2>
            <p className="text-neutral-light">
              This feature is currently under development and will be available
              soon.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-6 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
