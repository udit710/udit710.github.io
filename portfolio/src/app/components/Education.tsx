import next from "next";
import ImageText from "./ImageText";
import rmit from "../public/rmit.jpeg";

function Education() {
    return (
        <div className="md:p-6 p-0">
            <h1 className="font-[Times] text-3xl mb-5">Education</h1>
            <div className="hover:shadow-xl">
                <div className="box-content m-auto bg-white m4 px-8 py-2 text-black mb-5 border-[0.5px] border-black ">
                    <a className="text-md md:text-xl tracking-tight md:tracking-normal" href="http://rmit.edu.au" target="_blank">
                <ImageText imageSrc={rmit.src} text="Royal Melbourne Institute of Technology (RMIT)" IconEl={"symbol"} />
                </a>
                        <span className="font-sans text-sm opacity-50">Feb '22 - Nov '24</span>
                    <h2 className="text-sm md:text-lg text-left font-mono">Bachelor of Computer Science 
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Education;