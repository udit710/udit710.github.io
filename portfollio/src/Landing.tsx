import React, { useState,useEffect } from "react";
import "./Landing.css";
import fire from "./fire.gif";
import { Box, Button,Text, ChakraProvider, Heading, Modal, chakra, Center, VStack, HStack, Spacer } from "@chakra-ui/react";
import navbar from "./components/navbar";

export default function Landing() {
    const [x, setX] = useState(0);
    const[showList, setShowList] = useState(false);

    const variable = ["Web Developer 👨🏻‍💻", "Backend Developer ⚙️", "App Developer 📱", "Soccer Enthusiast ⚽️", "Gym Rat 💪🏻"];

    useEffect(() => {
        const interval = setTimeout(() => {
            setX((x + 1) % variable.length);
        }, 1300);

        return () => {
            clearTimeout(interval);
        };
    }, [x, variable]);

    function show(array:String){
        var arr:String[] = [];
        if (array == "web") {
            arr = ['Node JS','React JS','Bootstrap','CSS','HTML5'];
        } else if (array == "ci") {
            arr = ['GitHub Actions','Git'];
        } else if (array == "lang") {
            arr = ['Python', 'Javascript', 'Java'];
        } else if (array == "app") {
            arr = ['Swift (iOS, iPadOS)', 'SwiftUI', 'UIKit', 'WidgetKit', 'CoreData'];
        } else if (array == "backend") {
            arr = ['API development', 'Spring-boot', 'Javalin', 'JDBC'];
        } else if (array == "other") {
            arr = ['Swift (iOS, iPadOS)', 'SwiftUI', 'UIKit', 'WidgetKit', 'CoreData'];
        }
        return arr.map((item,index) => (
            <li key={index} className="point">{item}</li>
        ));
    }

    return (
        <>
        <VStack>
        <div className="page">
        <div className="nav">{navbar()}</div>
            <HStack>
                <Spacer />
                    <Heading className="h1" justifyContent={"center"} >Hi, I am Udit</Heading>
                <Spacer />
            </HStack>
            <div className="contact">
            <span className="location"><a href="https://www.linkedin.com/in/udit-malshe/">LinkedIn</a> | 📍 Melbourne | <a href="mailto:udit.malshe10@outlook.com">Email</a> </span>

            </div>

            <div className="intro">

                <br />
            <Box m="4" p="4" border="white solid 1px" borderRadius="10px" overflow="hidden" bg={"gray"}>
                <Text m={20}>
             I am a versatile and proactive software enthusiast, excelling in dynamic team environments. My keen ability to adapt to evolving challenges and my ever-growing hunger for learning set me apart. I thrive on social interactions, bringing not only strong technical skills but also a collaborative and engaging presence to any project. With my deep understanding of web and app development, I am poised to make a significant and unique contribution to the field of software development.
             </Text>
            </Box>
            </div>

            <br />

            <h1>Key Skills</h1>
            <div className="skills">
                <details>
                    <summary>Web Development</summary>
                    Node JS, React JS, Bootstrap, CSS, HTML5.
                </details>
                <details>
                    <summary>CI / CD</summary>
                    GitHub Actions, Git.
                </details>
                <details>
                    <summary>Key Programming Language</summary>
                    Python, Javascript, Java.
                </details>
                <details>
                    <summary>App Development</summary>
                    Swift (iOS, iPadOS), SwiftUI, UIKit, WidgetKit, CoreData.
                </details>
                <details>
                    <summary>Backend Development</summary>
                    API development, Spring-boot, Javalin, JDBC.
                </details>
                <details>
                    <summary>Others</summary>
                    Communication, SQLite, Agile Development, Problem Solving, Object Oriented Programming(OOP), C++, Swift StoryBoards, DSA, XCTests, JUnit, Kali Linux, NumPy, Pandas,MySQL, MVC, MV, MVVM, AWS EC2, AWS Beanstalk, JWT, Docker, Axios, Solidity, Smart-Contracts.
                </details>
                <br />
            </div>

            <footer>
            <span className="my_title">
                    {variable[x]}
                </span>
            </footer>
        </div>
        </VStack>
        </>
    );
}
