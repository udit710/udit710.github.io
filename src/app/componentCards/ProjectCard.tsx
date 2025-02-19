import { useState } from "react";
import { FaAngleDown, FaAngleUp, FaGithub } from "react-icons/fa";
import Tech from "./tech";
import ImageText from "./ImageText";

interface ProjectCardProps {
    tag: string[];
    projectName: string;
    description: string;
    shortDescription: string;
    skills: string[];
    date: string;
    imageSrc: string;
    link: string;
    githubUrl?: string;
}

const ProjectCard = ({ 
    tag,
    projectName, 
    description, 
    shortDescription,
    skills, 
    date, 
    imageSrc, 
    link, 
    githubUrl 
}: ProjectCardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleReadMore = () => setIsExpanded(!isExpanded);

    return (
        <div className="flex flex-col md:flex-row border-[0.5px] border-black overflow-hidden hover:shadow-xl font-[Times] mb-5">
            <div className="md:w-1/3 bg-blue bg-opacity-10 py-4 px-6 flex justify-between items-center md:block">
                {link && <a href={link} target="_blank" className="text-3xl font-bold mb-3">
                    <ImageText text={projectName} imageSrc={imageSrc} IconEl={"symbol"} />
                </a>}
                {!link && <div className="text-3xl font-bold mb-3">
                    {projectName}
                    </div>}
                <button onClick={toggleReadMore} className="text-blue-500 underline bg-blue bg-opacity-20 p-1 md:hidden mb-3">
                    {isExpanded ? <FaAngleUp /> : <FaAngleDown />}
                </button>
                {/* Large Screen */}
                <div className="md:w-2/3 text-white font-mono hidden md:block">
                    <p className="text-gray-600 mb-2">{date}</p>
                    <ul className="flex flex-wrap text-gray-800 text-sm list-disc list-inside mb-2">
                        {skills.map(skill => (
                            <Tech key={skill} text={skill} bg={"blue"} />
                        ))}
                    </ul>
                    {githubUrl && (
                        <a href={githubUrl} target="_blank" className="text-3xl font-bold mb-3">
                            <FaGithub className="text-2xl text-black" />
                        </a>
                    )}
                </div>
            </div>
            {/* Small Screen */}
            <div className="md:w-2/3 bg-blue text-white p-6 font-mono md:hidden">
                {isExpanded ? (
                    <p className="text-sm md:text-lg">
                        {description}
                        <br />
                        <span className="flex flex-wrap">
                            {skills.map(skill => (
                                <Tech key={skill} text={skill} bg={"white"} />
                            ))}
                        </span>
                    </p>
                ) : (
                    <p className="text-sm md:text-lg">{shortDescription}</p>
                )}
            </div>
            {/* Large Screen */}
            <div className="md:w-2/3 bg-blue text-white p-6 font-mono hidden md:block">
                <p className="text-sm md:text-lg">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
