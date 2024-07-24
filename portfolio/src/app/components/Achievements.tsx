import next from "next";
import React, {useState} from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Tech from "./tech";
import ImageText from "./ImageText";
import codequest from "../public/codequest.jpeg";

function Achievements() {
    const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

    return (
        <div className="md:p-6 p-0">
            <h1 className="font-[Times] text-3xl mb-5">Achievements</h1>
            <div className="box-content m-auto bg-blue bg-opacity-10 m4 text-black mb-5 border-[0.5px] border-black hover:shadow-xl">
                    <div className="bg-blue bg-opacity-100 text-white px-4 py-2 flex justify-between items-center">
                        {/* <h1 className="text-3xl font-[Times]">
                        2nd Prize in Codequest <span className="text-2xl">(2023) </span>
                        </h1> */}
                        <ImageText text="2nd Prize in Codequest 2023" imageSrc={codequest.src} IconEl={"symbol"} />
                        <button onClick={toggleReadMore} className="text-blue-500 underline bg-blue bg-opacity-20 p-1 md:hidden">
                        {isExpanded ? <FaAngleUp /> : <FaAngleDown />}
                        </button>
                    </div>
                    <div className="font-mono text-left text-sm md:text-lg px-4 py-2 md:hidden">
                    {isExpanded ? (
                        <text>
                            Secured the 2nd position in CodeQuest 2023, a prestigious coding competition that involved a game of competing on various maps. During the competition, I leveraged my expertise in Python programming. To enhance the bot’s capabilities, we used the CQ23 library, which facilitated smooth communication between my code and the game server through JSON messages. This achievement not only demonstrates my proficiency in software development but also showcases my strategic thinking and problem-solving abilities in a competitive environment.
                            <div className=" text-center text-sm ]">
                                <Tech bg="blue" text="python" /> <Tech bg="blue" text="docker" />
                                {/* Tech Stack: Python, CQ23, Docker.</span> */}
                                </div>
                        </text>
                        ) : (
                        <p>
                            Secured the 2nd position in CodeQuest 2023, a prestigious coding competition that involved a game of competing on various maps...
                        </p>
                        )}
                    </div>
                    <div className="font-mono text-left text-sm md:text-lg px-4 py-2 hidden md:block ">
                        <text>
                            Secured the 2nd position in CodeQuest 2023, a prestigious coding competition that involved a game of competing on various maps. During the competition, I leveraged my expertise in Python programming. To enhance the bot’s capabilities, we used the CQ23 library, which facilitated smooth communication between my code and the game server through JSON messages. This achievement not only demonstrates my proficiency in software development but also showcases my strategic thinking and problem-solving abilities in a competitive environment.
                            <div className=" text-center text-sm ]">
                                <Tech bg="blue" text="python" /> <Tech bg="blue" text="docker" />
                                {/* Tech Stack: Python, CQ23, Docker.</span> */}
                                </div>
                        </text>
                    </div>
                </div>
        </div>
    );
}

export default Achievements;