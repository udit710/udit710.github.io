import React from "react";

const Tech = ({ text, bg }: { text: string, bg: string }) => {
  return (
    <span className={`bg-${bg} rounded-lg text-xs p-1 m-1 whitespace-nowrap ${bg === 'white' ? 'text-black' : 'text-white'}`}>
      {text}
    </span>
  );
};

export default Tech;
