import next from "next";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import Tech from "./tech";
import ImageText from "./ImageText";
import cart from "../../../public/cart.jpeg";
import pumpbuddy from "../../../public/pumpbuddy.jpeg";
import aws from "../../../public/aws.jpeg";
import {FaGithub} from "react-icons/fa";

function Projects() {

    const [isExpanded1, setIsExpanded1] = useState(false);

  const toggleReadMore1 = () => {
    setIsExpanded1(!isExpanded1);
  };
    const [isExpanded2, setIsExpanded2] = useState(false);

  const toggleReadMore2 = () => {
    setIsExpanded2(!isExpanded2);
  };
    const [isExpanded3, setIsExpanded3] = useState(false);

  const toggleReadMore3 = () => {
    setIsExpanded3(!isExpanded3);
  };

    return (
        <div className="md:p-6 p-0">
                <h1 className="font-[Times] text-3xl mb-5">Projects</h1>

                {/* Serverless */}
                <div className="flex flex-col md:flex-row border-[0.5px] border-black overflow-hidden hover:shadow-xl font-[Times] mb-5">
                <div className="md:w-1/3 bg-blue bg-opacity-10 pt-4 px-6 flex justify-between items-center md:block">
                <a href="https://aws.amazon.com/pm/lambda/" target="_blank" className="text-3xl font-bold mb-3">
                <ImageText text="Serverless Web App" imageSrc={aws.src} IconEl={"symbol"} />
                    </a>
                    <button onClick={toggleReadMore3} className="text-blue-500 underline bg-blue bg-opacity-20 p-1 md:hidden mb-3">
                        {isExpanded3 ? <FaAngleUp /> : <FaAngleDown />}
                    </button>
                    {/* Large screen */}
                <div className="md:w-2/3 text-white font-mono hidden md:block">
                <p className="text-gray-600 mb-2">Mar - Apr &apos;24</p>
                    <ul className=" flex flex-wrap text-gray-800 text-sm list-disc list-inside mb-2">
                        {/* React, AWS EC2, DynamoDB, AWS Lambda, AWS S3, Apache2, TailwindCSS */}
                    <Tech text={"react js"} bg={"blue"} />
                    <Tech text={"dynamo db"} bg={"blue"} />
                    <Tech text={"aws ec2"} bg={"blue"} />
                    <Tech text={"aws lambda"} bg={"blue"} />
                    <Tech text={"aws api gateway"} bg={"blue"} />
                    <Tech text={"s3"} bg={"blue"} />
                    <Tech text={"nginx"} bg={"blue"} />
                    <Tech text={"tailwind"} bg={"blue"} />
                    </ul>
                </div>
                </div>
                {/* Small Screen */}
                <div className="md:w-2/3 bg-blue text-white p-6 font-mono md:hidden">
                {isExpanded3 ? (
                    <p className="text-sm md:text-lg">Developed a serverless online music subscription application using AWS Lambda. Leveraged more AWS services, including S3 for storage and DynamoDB for database management. Deployed the application on an Ubuntu Server using EC2. Designed and implemented key components and functionalities, enhancing user experience and ensuring scalability.
                    <br />
                    <text className="flex flex-wrap">
                        <Tech text={"react js"} bg={"white"} />
                        <Tech text={"dynamo db"} bg={"white"} />
                        <Tech text={"aws ec2"} bg={"white"} />
                        <Tech text={"aws lambda"} bg={"white"} />
                        <Tech text={"aws api gateway"} bg={"white"} />
                        <Tech text={"s3"} bg={"white"} />
                        <Tech text={"nginx"} bg={"white"} />
                        <Tech text={"tailwind"} bg={"white"} />
                    </text>

                    </p>
                    ) : (
                        <p className="text-sm md:text-lg">Developed a serverless online music subscription application using AWS Lambda. Leveraged more AWS...</p>
                    )}
                </div>
                {/* Large Screen */}
                <div className="md:w-2/3 bg-blue text-white p-6 font-mono hidden md:block">
                    <p className="text-sm md:text-lg">Developed a serverless online music subscription application using AWS Lambda. Leveraged more AWS services, including S3 for storage and DynamoDB for database management. Deployed the application on an Ubuntu Server using EC2. Designed and implemented key components and functionalities, enhancing user experience and ensuring scalability.</p>
                </div>
                </div>


                {/* Superprice */}
                <div className="flex flex-col md:flex-row border-[0.5px] border-black overflow-hidden hover:shadow-xl font-[Times] mb-5">
                <div className="md:w-1/3 bg-blue bg-opacity-10 pt-4 px-6 flex justify-between items-center md:block">
                <a href="https://github.com/udit710/SuperPrice" target="_blank" className="text-3xl font-bold mb-3">
                <ImageText text="Superprice" imageSrc={cart.src} IconEl={"symbol"} />
                    </a>
                    <button onClick={toggleReadMore1} className="text-blue-500 underline bg-blue bg-opacity-20 p-1 md:hidden mb-3">
                        {isExpanded1 ? <FaAngleUp /> : <FaAngleDown />}
                    </button>
                    {/* Large screen */}
                <div className="md:w-2/3 text-white font-mono hidden md:block">
                <p className="text-gray-600 mb-2">Aug - Oct &apos;23</p>
                    <ul className=" flex flex-wrap text-gray-800 text-sm list-disc list-inside mb-2">
                    <Tech text={"spring boot"} bg={"blue"} />
                    <Tech text={"react js"} bg={"blue"} />
                    <Tech text={"aws beanstalk"} bg={"blue"} />
                    <Tech text={"aws ec2"} bg={"blue"} />
                    <Tech text={"docker"} bg={"blue"} />
                    <Tech text={"jwt"} bg={"blue"} />
                    <Tech text={"mysql"} bg={"blue"} />
                    <Tech text={"bootstrap"} bg={"blue"} />
                    <Tech text={"ci"} bg={"blue"} />
                    <Tech text={"git"} bg={"blue"} />
                    </ul>
                    <a href="https://github.com/udit710/SuperPrice" target="_blank" className="text-3xl font-bold mb-3">
                    <FaGithub className="text-2xl text-black" />
                    </a>
                </div>
                </div>
                {/* Small Screen */}
                <div className="md:w-2/3 bg-blue text-white p-6 font-mono md:hidden">
                {isExpanded1 ? (
                    <p className="text-sm md:text-lg">Developed a full-stack e-commerce platform, Superprice, that enables users to browse and purchase a wide range of products. This project involved building a RESTful API using Spring Boot, integrating with a React JS frontend, and deploying the application on AWS Beanstalk and EC2 instances. Implemented user authentication using JWT tokens, stored product data in a MySQL database, and ensured seamless deployment using Docker containers. This project not only showcases my proficiency in full-stack development but also highlights my ability to deliver scalable and secure web applications.
                    <br />
                    <text className="flex flex-wrap">
                        <Tech text={"spring boot"} bg={"white"} />
                        <Tech text={"react js"} bg={"white"} />
                        <Tech text={"aws beanstalk"} bg={"white"} />
                        <Tech text={"aws ec2"} bg={"white"} />
                        <Tech text={"docker"} bg={"white"} />
                        <Tech text={"jwt"} bg={"white"} />
                        <Tech text={"mysql"} bg={"white"} />
                        <Tech text={"bootstrap"} bg={"white"} />
                        <Tech text={"ci"} bg={"white"} />
                        <Tech text={"git"} bg={"white"} />
                    </text>

                        {/* Tech stack: Spring Boot, React JS, AWS Beanstalk, AWS EC2, Docker, JWT, MySQL, Bootstrap, CI, Git. */}
                    </p>
                    ) : (
                        <p className="text-sm md:text-lg">Developed a full-stack e-commerce platform, Superprice, that enables users to browse and purchase a wide range of products. This project...</p>
                    )}
                </div>
                {/* Large Screen */}
                <div className="md:w-2/3 bg-blue text-white p-6 font-mono hidden md:block">
                    <p className="text-sm md:text-lg">Developed a full-stack e-commerce platform, Superprice, that enables users to browse and purchase a wide range of products. This project involved building a RESTful API using Spring Boot, integrating with a React JS frontend, and deploying the application on AWS Beanstalk and EC2 instances. Implemented user authentication using JWT tokens, stored product data in a MySQL database, and ensured seamless deployment using Docker containers. This project not only showcases my proficiency in full-stack development but also highlights my ability to deliver scalable and secure web applications.</p>
                </div>
                </div>

                
                {/* PumpBuddy */}
                <div className="flex flex-col md:flex-row border-[0.5px] border-black overflow-hidden hover:shadow-xl font-[Times] mb-5">
                <div className="md:w-1/3 bg-blue bg-opacity-10 pt-4 px-6 flex justify-between items-center md:block">
                <a href="https://github.com/udit710/PumpBuddy" target="_blank" className="text-3xl font-bold mb-3">
                    <ImageText text="PumpBuddy" imageSrc={pumpbuddy.src} IconEl={"symbol"} />
                    </a>
                    <button onClick={toggleReadMore2} className="text-blue-500 underline bg-blue bg-opacity-20 p-1 md:hidden mb-3">
                        {isExpanded3 ? <FaAngleUp /> : <FaAngleDown />}
                    </button>
                    {/* Large screen */}
                <div className="md:w-2/3 text-white font-mono hidden md:block">
                <p className="text-gray-600 mb-2">Jul - Sep &apos;23</p>
                    <ul className=" flex flex-wrap text-gray-800 text-sm list-disc list-inside mb-2">

                    <Tech text={"swift"} bg={"blue"} />
                    <Tech text={"swiftui"} bg={"blue"} />
                    <Tech text={"coredata"} bg={"blue"} />
                    <Tech text={"xctests"} bg={"blue"} />
                    <Tech text={"widgetkit"} bg={"blue"} />
                    <Tech text={"uikit"} bg={"blue"} />
                    <Tech text={"git"} bg={"blue"} />
                    </ul>
                    <a href="https://github.com/udit710/PumpBuddy" target="_blank" className="text-3xl font-bold mb-3">
                    <FaGithub className="text-2xl text-black" />
                    </a>

                </div>
                </div>
                {/* Small Screen */}
                <div className="md:w-2/3 bg-blue text-white p-6 font-mono md:hidden">
                {isExpanded2 ? (
                    <p className="text-sm md:text-lg">Designed and built an engaging iOS app with SwiftUI, specifically tailored for users seeking to track their workouts and achieve their desired weight goals. This app empowers users to add new workouts, access preset workout routines for on-the-go Vitness, and visualise their weight progress through intuitive graphical representations. This project not only highlights my advanced Swift skills but also reVlects my creative approach to crafting user-friendly and interactive mobile applications.
                    <br /><text className=" flex flex-wrap">
                        <Tech text={"swift"} bg={"white"} />
                        <Tech text={"swiftui"} bg={"white"} />
                        <Tech text={"coredata"} bg={"white"} />
                        <Tech text={"xctests"} bg={"white"} />
                        <Tech text={"widgetkit"} bg={"white"} />
                        <Tech text={"uikit"} bg={"white"} />
                        <Tech text={"git"} bg={"white"} />
                    </text>
                        {/* Tech stack: Swift, SwitfUI, CoreData, XCTests, WidgetKit, UIKit, Git.</text> */}
                    </p>
                    ) : (
                        <p className="text-sm md:text-lg">Designed and built an engaging iOS app with SwiftUI, specifically tailored for users seeking to track their workouts and achieve their desired weight goals. This app...</p>
                    )}
                </div>
                {/* Large Screen */}
                <div className="md:w-2/3 bg-blue text-white p-6 font-mono hidden md:block">
                    <p className="text-sm md:text-lg">Designed and built an engaging iOS app with SwiftUI, specifically tailored for users seeking to track their workouts and achieve their desired weight goals. This app empowers users to add new workouts, access preset workout routines for on-the-go Vitness, and visualise their weight progress through intuitive graphical representations. This project not only highlights my advanced Swift skills but also reVlects my creative approach to crafting user-friendly and interactive mobile applications.</p>
                </div>
                </div>
            </div>
    );
}

export default Projects;