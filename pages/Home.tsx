import React from 'react';
import { resumeData } from '../data/resumeData';

const Home: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-160px)] flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-lg shadow-xl p-8 md:p-12 max-w-4xl w-full text-center transform transition duration-500 hover:scale-105">
        <img
          src={resumeData.photoUrl}
          alt={resumeData.name}
          className="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-4 border-cyan-500 shadow-lg"
        />
        <h1 className="text-5xl font-extrabold text-gray-50 mb-4 leading-tight">
          {resumeData.name}
        </h1>
        <h2 className="text-2xl font-semibold text-cyan-400 mb-6 tracking-wide">
          {resumeData.tagline}
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
          {resumeData.professionalStatement}
        </p>
      </div>
    </div>
  );
};

export default Home;