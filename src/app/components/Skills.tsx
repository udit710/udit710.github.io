import next from "next";
import { FaNodeJs } from "react-icons/fa";
import Tech from "./tech";


function Skills() {
    return (
        <div className="md:p-6 p-0">
                <h1 className="font-[Times] text-3xl mb-5">Stack</h1>
            <div className="md:flex md:flex-wrap">
                <div className="box-content m-auto bg-white m4 px-8 py-2 text-blue mb-5 border-[0.5px] border-black shadow-lg hover:bg-black hover:text-white">
                    <h1 className="text-3xl text-center font-[Times]">Web</h1>
                    <p className="font-mono text-center">
                        <Tech bg="blue" text="Node JS" /> <Tech bg="blue" text="React JS" /> <Tech bg="blue" text="Tailwind" /> <Tech bg="blue" text="Axios" /> <Tech bg="blue" text="Spring-Boot" /> <Tech bg="blue" text="REST Api" />
                    {/* Node JS, React JS, Tailwind, Axios, Spring-Boot, REST Api */}
                    </p>
                    {/* <p className="flex items-center space-x-2">
                        <FaNodeJs />Node JS, React JS, Tailwind, Axios, Spring-Boot, REST Api.
                    </p> */}

                </div>
                <div className="box-content m-auto bg-blue bg-opacity-60 m4 px-8 py-2 text-white mb-5 border-[0.5px] border-black shadow-lg hover:bg-black hover:text-white">
                    <h1 className="text-3xl text-center font-[Times]">Programming</h1>
                    <p className="font-mono text-center">
                        <Tech bg="blue" text="Python" /> <Tech bg="blue" text="Javascript" /> <Tech bg="blue" text="Java" />
                    {/* Python, Javascript, Java */}
                    </p>
                </div>
                <div className="box-content m-auto bg-white m4 px-8 py-2 text-blue mb-5 border-[0.5px] border-black shadow-lg hover:bg-black hover:text-white">
                    <h1 className="text-3xl text-center font-[Times]">Cloud</h1>
                    <p className="font-mono text-center">
                        <Tech bg="blue" text="AWS" /> <Tech bg="blue" text="EC2" /> <Tech bg="blue" text="Beanstalk" /> <Tech bg="blue" text="DynamoDB" /> <Tech bg="blue" text="API Gateway" /> <Tech bg="blue" text="S3" /> <Tech bg="blue" text="Lambda" />
                    {/* AWS (EC2, Beanstalk, DynamoDB, API Gateway, S3, Lambda) */}
                    </p>
                </div>
                <div className="box-content m-auto bg-blue bg-opacity-60 m4 px-8 py-2 text-white mb-5 border-[0.5px] border-black shadow-lg hover:bg-black hover:text-white">
                    <h1 className="text-3xl text-center font-[Times]">App</h1>
                    <p className="font-mono text-center">
                        <Tech bg="blue" text="Swift" /> <Tech bg="blue" text="SwiftUI" /> <Tech bg="blue" text="UIKit" /> <Tech bg="blue" text="Core Data" />
                    {/* SwiftUI, UIKit, Core Data */}
                    </p>
                </div>
                <div className="box-content m-auto bg-white m4 px-8 py-2 text-blue mb-5 border-[0.5px] border-black shadow-lg hover:bg-black hover:text-white">
                    <h1 className="text-3xl text-center font-[Times]">CI/CD</h1>
                    <p className="font-mono text-center">
                        <Tech bg="blue" text="Git" /> <Tech bg="blue" text="Docker" />
                    {/* Git, Docker */}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Skills;