import next from "next";
import { FaNodeJs } from "react-icons/fa";
import Tech from "./tech";


function Skills() {
    return (
        <div className="md:p-6 p-0">
                <h1 className="font-[Times] text-3xl mb-5">Stack</h1>
            <div className="md:flex md:flex-wrap">
                <div className="box-content m-auto bg-white m4 px-8 py-2 text-blue mb-5 border-[0.5px] border-black shadow-lg hover:bg-black hover:text-white">
                    <h1 className="text-3xl text-center font-[Times]">Technologies</h1>
                    <p className="font-mono text-center">
                        <Tech bg="blue" text="Node JS" /> <Tech bg="blue" text="React JS" /> <Tech bg="blue" text="Tailwind" />  <Tech bg="blue" text="Flask" /> <Tech bg="blue" text="Django" /> <Tech bg="blue" text="Express" /> <Tech bg="blue" text="Next" /> <Tech bg="blue" text="Spring boot" /> 
                    </p>

                </div>
                <div className="box-content m-auto bg-blue bg-opacity-60 m4 px-8 py-2 text-white mb-5 border-[0.5px] border-black shadow-lg hover:bg-black hover:text-white">
                    <h1 className="text-3xl text-center font-[Times]">Programming</h1>
                    <p className="font-mono text-center">
                         <Tech bg="blue" text="Object Oriented" /> <Tech bg="blue" text="Functional" /> <Tech bg="blue" text="Scripting" />  <Tech bg="blue" text="REST API" />
                    {/* Object Oriented, Functional, Scripting, REST API */}
                    </p>
                </div>
                <div className="box-content m-auto bg-white m4 px-8 py-2 text-blue mb-5 border-[0.5px] border-black shadow-lg hover:bg-black hover:text-white">
                    <h1 className="text-3xl text-center font-[Times]">Cloud</h1>
                    <p className="font-mono text-center">
                        <Tech bg="blue" text="AWS"/>  <Tech bg="blue" text="Serverless" /> <Tech bg="blue" text="Azure" /> <Tech bg="blue" text="GCP" />
                    {/* AWS, Serverless, Azure, GCP */}
                    </p>
                </div>
                <div className="box-content m-auto bg-blue bg-opacity-60 m4 px-8 py-2 text-white mb-5 border-[0.5px] border-black shadow-lg hover:bg-black hover:text-white">
                    <h1 className="text-3xl text-center font-[Times]">App</h1>
                    <p className="font-mono text-center">
                        <Tech bg="blue" text="SwiftUI" /> <Tech bg="blue" text="React Native" /> <Tech bg="blue" text="Flutter" /> <Tech bg="blue" text=".NET" /> <Tech bg="blue" text="SQL" />
                        {/* SwiftUI, React Native, Flutter, .NET, SQL */}
                    </p>
                </div>
                <div className="box-content m-auto bg-white m4 px-8 py-2 text-blue mb-5 border-[0.5px] border-black shadow-lg hover:bg-black hover:text-white">
                    <h1 className="text-3xl text-center font-[Times]">CI/CD</h1>
                    <p className="font-mono text-center">
                        <Tech bg="blue" text="Git" /> <Tech bg="blue" text="Docker" /><Tech bg="blue" text="Github Actions" /> <Tech bg="blue" text="Linux" />
                    { /* Git, Docker, Github Actions, Linux */}
                    </p>
                </div>
                <div className="box-content m-auto bg-blue bg-opacity-60 m4 px-8 py-2 text-white mb-5 border-[0.5px] border-black shadow-lg hover:bg-black hover:text-white">
                    <h1 className="text-3xl text-center font-[Times]">ML</h1>
                    <p className="font-mono text-center">
                        <Tech bg="blue" text="Tensorflow" /><Tech bg="blue" text="Pytorch" /><Tech bg="blue" text="NLP" /><Tech bg="blue" text="Pre-trained models" /><Tech bg="blue" text="CV" />
                    {/* Tensorflow, Pytorch, NLP, Pre-trained models, CV */}
                    </p>
                </div>
                <div className="box-content m-auto bg-white m4 px-8 py-2 text-blue mb-5 border-[0.5px] border-black shadow-lg hover:bg-black hover:text-white">
                    <h1 className="text-3xl text-center font-[Times]">Others</h1>
                    <p className="font-mono text-center">
                        <Tech bg="blue" text="Leadership" /><Tech bg="blue" text="Communication" /><Tech bg="blue" text="Team Work" /><Tech bg="blue" text="Agile" />
                    {/* Leadership, Communication, Team Work, Agile */}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Skills;