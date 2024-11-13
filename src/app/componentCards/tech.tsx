import React from "react";
import iconMapping from "./Icons";
import { FaCode } from "react-icons/fa";

const Tech = ({ text, bg }: { text: string, bg: string }) => {
    const IconComponent = iconMapping[text] || FaCode; // Default icon

    return (
      <>
       <span className={`bg-${bg} rounded-lg text-xs p-1 m-1 whitespace-nowrap ${bg === 'white' ? 'text-black' : 'text-white'}`}>
      {text}
      <IconComponent className="inline-block h-3 w-3 ml-1" />
       </span>
      </>
    );
};

export default Tech;