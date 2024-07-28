import next from "next";
import { CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";


const Contact = () => {
    return (
        <div className="md:p-6 p-0 h-[30vh] ">
            <div className="bg-blue text-white px-4 py-2 flex justify-between items-center border-[0.5px] border-black">
                        <h1 className="text-3xl font-[Times]">
                        Contact
                        </h1>
                    </div>
                    <div className="font-mono text-left text-lg px-4 py-2 border-[0.5px] border-black">
                    <a className="flex items-center space-x-2" href="tel:+61484525498"target="_blank">
                        <FaPhoneAlt className="h-5 w-5" /> 
                        <h1 className="font-[Times] text-md underline">+61484525498</h1>
                    </a>
                    <a
                    className="flex items-center space-x-2"
                    href="mailto:udit.malshe.10@outlook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <CiMail className="h-5 w-5" /> 
                    <h1 className="font-[Times] text-gray-900">Email</h1>
                    </a>
                    <a className="flex items-center space-x-2" href="https://www.linkedin.com/in/udit-malshe/" target="_blank">
                        <FaLinkedin className="h-5 w-5" /> 
                        <h1 className="font-[Times] ">LinkedIn</h1>
                    </a>
                    <a className="flex items-center space-x-2" href="https://github.com/udit710" target="_blank">
                        <FaGithub className="h-5 w-5" /> 
                        <h1 className="font-[Times] ">GitHub</h1>
                    </a>
                    </div>
                </div>
    );
}

export default Contact;