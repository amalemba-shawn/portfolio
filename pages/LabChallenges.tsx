import React from 'react';
import SectionTitle from '../components/SectionTitle';
import LabChallengeCard from '../components/LabChallengeCard';
import { labChallengesData } from '../data/labChallengesData';

const LabChallenges: React.FC = () => {
  return (
    <div className="container mx-auto p-4 md:p-8 min-h-[calc(100vh-160px)]">
      <SectionTitle title="Lab Challenges" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {labChallengesData.map((challenge) => (
          <LabChallengeCard key={challenge.id} challenge={challenge} />
        ))}
      </div>
    </div>
  );
};

export default LabChallenges;