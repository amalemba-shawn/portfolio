import React, { useState } from 'react';
import { LabChallenge } from '../types';

interface LabChallengeCardProps {
  challenge: LabChallenge;
}

const LabChallengeCard: React.FC<LabChallengeCardProps> = ({ challenge }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-gray-800 rounded-lg shadow-xl p-6 mb-6 transform transition duration-300 hover:scale-[1.01]">
      <h3 className="text-2xl font-semibold text-gray-100 mb-3">{challenge.title}</h3>
      <p className="text-gray-300 mb-4">
        <strong className="text-cyan-400">Problem Statement:</strong> {challenge.problemStatement}
      </p>

      <button
        onClick={() => setShowDetails(!showDetails)}
        className="text-cyan-500 hover:text-cyan-400 font-medium flex items-center mb-4 focus:outline-none"
      >
        {showDetails ? (
          <>
            Show Less
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform rotate-180" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </>
        ) : (
          <>
            Show More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </>
        )}
      </button>

      {showDetails && (
        <div className="mt-4 border-t border-gray-700 pt-4 animate-fade-in">
          <div className="mb-4">
            <strong className="text-cyan-400">Approach:</strong>
            <p className="text-gray-300 whitespace-pre-line">{challenge.approach}</p>
          </div>

          <div className="mb-4">
            <strong className="text-cyan-400">Tools Used:</strong>
            <div className="flex flex-wrap gap-2 mt-1">
              {challenge.toolsUsed.map((tool, index) => (
                <span
                  key={index}
                  className="bg-slate-700 text-purple-300 text-sm font-medium px-3 py-1 rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {challenge.screenshots.length > 0 && (
            <div className="mb-4">
              <strong className="text-cyan-400">Screenshots:</strong>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                {challenge.screenshots.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`${challenge.title} Screenshot ${index + 1}`}
                    className="w-full h-auto rounded-lg shadow-md object-cover"
                  />
                ))}
              </div>
            </div>
          )}

          <div>
            <strong className="text-cyan-400">Key Lessons Learned:</strong>
            <ul className="list-disc list-inside text-gray-300 mt-1 space-y-1">
              {challenge.lessonsLearned.map((lesson, index) => (
                <li key={index}>{lesson}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default LabChallengeCard;