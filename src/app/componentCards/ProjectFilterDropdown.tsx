import { useState } from "react";
import { ProjectTags } from "../components/Projects";

interface ProjectFilterDropdownProps {
    filterProjects: (tag: string) => void;
}

const ProjectFilterDropdown = ({ filterProjects }: ProjectFilterDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const options = [
        { label: "All", value: "" },
        { label: "Full Stack", value: ProjectTags.FullStack },
        { label: "ML/AI", value: ProjectTags.ML },
        { label: "Mobile", value: ProjectTags.Mobile },
        { label: "Cloud", value: ProjectTags.Cloud },
        { label: "CI/CD", value: ProjectTags.CICD },
    ];

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-blue text-white px-4 py-2 rounded-md"
            >
                Filter ▼
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-md z-10">
                    {options.map((option) => (
                        <button
                            key={option.value}
                            onClick={() => {
                                filterProjects(option.value);
                                setIsOpen(false);
                            }}
                            className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProjectFilterDropdown;
