import { MdSimCardDownload } from "react-icons/md";
import ImageText from "../componentCards/ImageText";

function Intro() {
    return (
        <div className="md:p-6 p-2 text-sm mb-10 md:mb-0">
            <text className="block tracking-wider">
                <h5 className="mb-2 text-4xl font-serif text-navy">Udit Malshe</h5>
                <h6 className="mb-4 text-2xl font-sans text-gray-500">DevOps Engineer</h6>
                <p className="text-[15px] md:text-lg text-black text-justify tracking-tight">
                    A <b>versatile</b> and <b>proactive</b> engineer, excelling in dynamic team environments. My keen ability to <b>adapt</b> to evolving challenges and my ever-growing hunger for learning set me apart. I thrive on <b>social interactions</b> like attending code nights and meet-ups, bringing not only strong technical skills but also a collaborative and engaging presence to any project. With my <b>deep understanding</b> of web and app development, I am poised to make a significant and unique contribution to the field of software development.
                </p>
            </text>
            <br />
            <button className="p-3 bg-blue text-white rounded-md font-mono">
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ImageText text="My Resume" IconEl={MdSimCardDownload} imageSrc={""} />
                </a>
            </button>
        </div>
    );
}

export default Intro;
