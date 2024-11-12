import React from "react";

const Tech = ({ text, bg, image }: { text: string, bg: string, image: undefined}) => {
  return (
    <span className={`bg-${bg} rounded-lg text-xs p-1 m-1 whitespace-nowrap ${bg === 'white' ? 'text-black' : 'text-white'}`}>
      {image ? <img src={image} alt={text} className="h-4 w-4 inline-block mr-1" /> : text}
    </span>
  );
};

export default Tech;
