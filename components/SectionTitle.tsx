import React from 'react';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <h2 className="text-4xl font-extrabold text-center text-cyan-400 mb-10 relative pb-4">
      {title}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-cyan-500 rounded-full"></span>
    </h2>
  );
};

export default SectionTitle;