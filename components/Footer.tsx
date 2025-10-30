import React from 'react';
import { contactInfo } from '../data/contactData';
import { resumeData } from '../data/resumeData'; // Import resumeData

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-12 shadow-inner">
      <div className="container mx-auto text-center">
        <p className="text-lg mb-4">Connect with me:</p>
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            <img src="https://www.svgrepo.com/show/349320/linkedin.svg" alt="LinkedIn" className="w-8 h-8 inline-block filter invert" />
          </a>
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub" className="w-8 h-8 inline-block filter invert" />
          </a>
          <a
            href={`mailto:${contactInfo.email}`}
            className="hover:text-cyan-400 transition-colors"
          >
            <img src="https://www.svgrepo.com/show/331393/email.svg" alt="Email" className="w-8 h-8 inline-block filter invert" />
          </a>
          <a
            href={`tel:${contactInfo.phone}`}
            className="hover:text-cyan-400 transition-colors"
          >
            <img src="https://www.svgrepo.com/show/472648/phone-fill.svg" alt="Phone" className="w-8 h-8 inline-block filter invert" />
          </a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} {resumeData.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;