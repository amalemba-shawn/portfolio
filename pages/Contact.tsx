import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { contactInfo } from '../data/contactData';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto p-4 md:p-8 min-h-[calc(100vh-160px)] flex flex-col items-center justify-center">
      <SectionTitle title="Contact Me" />
      <div className="bg-gray-800 rounded-lg shadow-xl p-8 md:p-12 max-w-2xl w-full text-center">
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          I'm always open to new opportunities, collaborations, and conversations.
          Feel free to reach out via any of the platforms below!
        </p>

        <div className="flex flex-col space-y-6">
          <div className="flex items-center justify-center space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-lg md:text-xl text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
            >
              {contactInfo.email}
            </a>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
            </svg>
            <a
              href={`tel:${contactInfo.phone}`}
              className="text-lg md:text-xl text-green-300 hover:text-green-200 font-medium transition-colors"
            >
              {contactInfo.phone}
            </a>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <img src="https://www.svgrepo.com/show/349320/linkedin.svg" alt="LinkedIn" className="w-8 h-8 flex-shrink-0 filter invert" />
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-xl text-sky-400 hover:text-sky-300 font-medium transition-colors"
            >
              LinkedIn Profile
            </a>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub" className="w-8 h-8 flex-shrink-0 filter invert" />
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-xl text-gray-100 hover:text-gray-50 font-medium transition-colors"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;