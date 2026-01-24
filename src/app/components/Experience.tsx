import next from "next";
import Tech  from "../componentCards/tech";

function Experience() {

    return (
        <div className=" md:p-6 p-0">
            <div>
                <h1 className="font-[Times] text-3xl mb-5">Experience</h1>
                <div className="box-content m-auto bg-blue bg-opacity-10 m4 text-black mb-5 border-[0.5px] border-black hover:shadow-xl ">
                    <div className="bg-blue bg-opacity-80 text-white px-4 py-2">
                    <h1 className="text-3xl text-left font-[Times]">Graduate DevOps Engineer / <span className="text-2xl">Iress</span></h1>
                    <h2 className="font-[Times] text-xl">May &apos;25 - Present</h2>
                    </div>
                    <div className="font-mono text-left text-sm md:text-lg px-4 py-2">
                        <li>Automated infrastructure deployment using IaC tools which increased trust in systems and reduced risk by 90%.</li>
                        <li>Integrated and monitored internal tooling and pipelines, enabling a better development experience for 1000+ developers.</li>
                        <li>Led and designed internal tooling solutions, including AI, to enhance the developer productivity.</li>
                        <li>Optimised cloud resource usage, resulting in a 10% increase in efficiency.</li>
                        <li>Communicated across multi-domain teams to streamline workflows.</li>
                    <div className=" text-center text-sm font-mono"><Tech bg="blue" text="AWS" /> <Tech bg="blue" text="Go" /> <Tech bg="blue" text="Terraform" /><Tech bg="blue" text="Python"/> <Tech bg="blue" text="CI/CD" /> <Tech bg="blue" text="Docker" /> <Tech bg="blue" text="Linux" /> <Tech bg="blue" text="Scripting" /> </div>
                    </div>
                </div>
                <div className="box-content m-auto bg-blue bg-opacity-10 m4 text-black mb-5 border-[0.5px] border-black hover:shadow-xl ">
                    <div className="bg-blue bg-opacity-80 text-white px-4 py-2">
                    <h1 className="text-3xl text-left font-[Times]">Full-Stack Developer / <span className="text-2xl">Freelance</span></h1>
                    <h2 className="font-[Times] text-xl">Apr &apos;24 - May &apos;25</h2>
                    </div>
                    <div className="font-mono text-left text-sm md:text-lg px-4 py-2">
                    <li>Designed and developed dynamic web applications using variant frameworks to create responsive and user-friendly interfaces and used AWS as cloud infrastructure.</li>
                    <li>Implemented Agile methodologies, including Scrum, to enhance collaboration, streamline project management, and deliver high-quality solutions on time.</li>
                    <li>Engaged with clients to understand requirements, provide Technical recommendations, and deliver customised solutions that meet their business needs.</li>
                    <br />
                    <div className=" text-center text-sm font-mono"><Tech bg="blue" text="AWS" /> <Tech bg="blue" text="Agile" /> <Tech bg="blue" text="REST API" /> <Tech bg="blue" text="Python" /> </div>
                    </div>
                </div>
                {/* <div className="box-content m-auto bg-blue bg-opacity-10 m4 text-black mb-5 border-[0.5px] border-black hover:shadow-xl ">
                    <div className="bg-blue bg-opacity-80 text-white px-4 py-2">
                    <h1 className="text-3xl text-left font-[Times]">Web Developer / <span className="text-2xl">RISC RMIT</span></h1>
                    <h2 className="font-[Times] text-xl">Apr &apos;24 - Present</h2>
                    </div>
                    <div className="font-mono text-left text-sm md:text-lg px-4 py-2">
                    <li>Led the migration to server-side rendering (SSR) frameworks, reducing data latency by 35%.</li>
                    <li>Collaborate with team members using version control systems such as Git to manage code changes efficiently.</li>
                    <li>Employed frameworks to ensure the website&apos;s functionality, responsiveness, and security. Participate in regular meetings to discuss project progress, brainstorm ideas, and address any challenges that arise during development.</li>
                    <br />
                    <div className=" text-center text-sm font-mono"><Tech bg="blue" text="Node JS" /> <Tech bg="blue" text="React JS" /> <Tech bg="blue" text="Git" /> </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Experience;