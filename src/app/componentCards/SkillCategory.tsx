// SkillCategory.js
import React from 'react';
import Tech from "../componentCards/tech";

interface SkillCategoryProps {
    title: string;
    skills: string[];
    bgColor: string;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, bgColor }) => {
    return (
        <div className={`box-content m-auto ${bgColor} px-8 py-2 mb-5 border-[0.5px] border-black shadow-lg hover:bg-black hover:text-white`}>
            <h1 className="text-3xl text-center font-[Times]">{title}</h1>
            <div className="font-mono text-center flex flex-wrap justify-center">
                {skills.map((skill, index) => (
                    <Tech key={index} bg="blue" text={skill} />
                ))}
            </div>
        </div>
    );
};

export default SkillCategory;
