import next from "next";
import SkillCategory from "../componentCards/SkillCategory";

function Skills() {
    const categories = [
        {
            title: "Programming",
            skills: ["Object Oriented", "Functional", "Scripting", "REST API", "WebSockets"],
            bgColor: "bg-white text-blue"
        },
        {
            title: "CI/CD",
            skills: ["Git", "Docker", "Github Actions", "Linux"],
            bgColor: "bg-blue bg-opacity-60 text-white"
        },
        {
            title: "Cloud",
            skills: ["AWS", "Serverless", "Azure", "GCP"],
            bgColor: "bg-white text-blue"
        },
        {
            title: "Technologies",
            skills: ["Node JS", "React JS", "Flask", "Django", "Spring boot", ".NET", "SwiftUI"],
            bgColor: "bg-blue bg-opacity-60 text-white"
        },
        {
            title: "ML",
            skills: ["Tensorflow", "Pandas", "NLP", "Pre-trained models", "CV"],
            bgColor: "bg-white text-blue"
        },
        {
            title: "Databases",
            skills: ["MySQL", "Dynamo db", "PostgreSQL", "NoSQL"],
            bgColor: "bg-blue bg-opacity-60 text-white"
        },
        {
            title: "Others",
            skills: ["Leadership", "Communication", "Team Work", "Agile"],
            bgColor: "bg-white text-blue"
        }
    ];

    return (
        <div className="md:p-6 p-0">
            <h1 className="font-[Times] text-3xl mb-5">Stack</h1>
            <div className="md:flex md:flex-wrap">
                {categories.map((category, index) => (
                    <SkillCategory
                        key={index}
                        title={category.title}
                        skills={category.skills}
                        bgColor={category.bgColor}
                    />
                ))}
            </div>
        </div>
    );
}

export default Skills;
