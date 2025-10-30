import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { resumeData } from '../data/resumeData';

const Resume: React.FC = () => {
  const { education, experience, certifications, skills } = resumeData;

  return (
    <div className="container mx-auto p-4 md:p-8 min-h-[calc(100vh-160px)]">
      <SectionTitle title="My Resume" />

      {/* Education */}
      <section className="mb-12">
        <h3 className="text-3xl font-bold text-gray-50 mb-6 border-b-2 border-cyan-500 pb-2">Education</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-[1.01] hover:shadow-lg">
              <h4 className="text-xl font-semibold text-cyan-400 mb-2">{edu.degree}</h4>
              <p className="text-lg text-gray-100 mb-1">{edu.institution}</p>
              <p className="text-gray-400 text-sm">{edu.duration}</p>
              {edu.details && (
                <ul className="list-disc list-inside text-gray-300 mt-3 space-y-1">
                  {edu.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Work Experience */}
      <section className="mb-12">
        <h3 className="text-3xl font-bold text-gray-50 mb-6 border-b-2 border-cyan-500 pb-2">Work Experience</h3>
        <div className="grid grid-cols-1 gap-8">
          {experience.map((exp, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-[1.01] hover:shadow-lg">
              <h4 className="text-xl font-semibold text-cyan-400 mb-2">{exp.title} - {exp.company}</h4>
              <p className="text-gray-400 text-sm mb-3">{exp.duration}</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-12">
        <h3 className="text-3xl font-bold text-gray-50 mb-6 border-b-2 border-cyan-500 pb-2">Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md flex items-center transform transition duration-300 hover:scale-[1.01] hover:shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-400 mr-4 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <h4 className="text-lg font-semibold text-gray-100">{cert.name}</h4>
                <p className="text-gray-300 text-sm">{cert.issuer} | {cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h3 className="text-3xl font-bold text-gray-50 mb-6 border-b-2 border-cyan-500 pb-2">Skills</h3>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="mb-6 last:mb-0">
              <h4 className="text-xl font-semibold text-cyan-400 mb-3 capitalize">{category}</h4>
              <div className="flex flex-wrap gap-3">
                {skillList.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-slate-700 text-indigo-300 rounded-full text-md font-medium shadow-sm transition-transform duration-200 hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resume;