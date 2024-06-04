import React, { useEffect, useRef, useState } from 'react';
import {
  ChakraProvider,
  Box,
  Center,
  Heading,
  Link,
  Text,
  Stack,
  Tag,
  Wrap,
  WrapItem,
  useColorMode,
  useColorModeValue,
  IconButton,
  Image,
  Grid,
  HStack,
  Spacer,
  Button,
  Flex,
  VStack,
  GridItem
} from "@chakra-ui/react";
import { FaGithub, FaEnvelope, FaMapMarkerAlt, FaSun, FaMoon } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import udit from  "./assets/udit.jpeg";
import cloudsbg from "./assets/cloudsbg.jpg"
import theme from './theme';
import './App.css'

const App: React.FC = () => {

  const { toggleColorMode } = useColorMode();
  const colorMode = useColorModeValue("light", "dark");

  const [isSticky, setIsSticky] = useState(false);
  const [opacity, setOpacity] = useState(1); // Initial opacity (fully visible)
  const navbarRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const windowScrollY = window.scrollY;
    const navbarHeight = navbarRef.current?.offsetHeight || 0; // Handle potential null reference

    setIsSticky(windowScrollY > navbarHeight);

    // Calculate opacity based on scroll position (adjust as needed)
    const scrollThreshold = 100; // Adjust this threshold to control opacity change sensitivity
    const newOpacity = Math.max(
      0.3, // Ensure opacity doesn't go below 0
      1 - windowScrollY / scrollThreshold
    );
    setOpacity(newOpacity);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  return (
    
    <ChakraProvider theme={theme}>
        <Image
        src={cloudsbg}
        alt='bg'
        z-index={-1}
        pos={'absolute'}
        width={"100%"}
         />
      <Box p={5} h="100%" >
      <VStack>
      <Box ref={navbarRef} as="nav" bg={colorMode === "dark" ? "gray.200" : "gray.900"} p={4} mb={8} borderRadius={20} borderWidth="2px" pos={'fixed'} opacity={opacity} transition="opacity 0.2s ease-in-out" >
          <HStack spacing={8} justifyContent="center">
            <Link href="#about">About</Link>
            <Link href="#skills">Key Skills</Link>
            <Link href="#achievements">Achievements</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#voluntary">Voluntary Work</Link>
            <Link href="#hobbies">Hobbies</Link>
            <Link href="#education">Education</Link>
            <Spacer />
          </HStack>
        </Box>
        {/* <Center mb={5}>
          <IconButton
          aria-label="Toggle Color Mode"
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          onClick={toggleColorMode}
          />
        </Center> */}
        <Box pt="10%" pb="15%">
        <Center>
          <Box>
          <Image
            borderRadius='full'
            boxSize='150px'
            bg={colorMode === "dark" ? "black" : "white"}
            p='3px'
            src={udit}
            alt='Udit'
            />
          </Box>
        </Center>
        <Center>
          <Heading as="h1" size="2xl" fontFamily="sans-serif">Hi, I am Udit</Heading>
        </Center>
        <Center mt={3}>
          <Link href="https://github.com/udit710" isExternal>
            <FaGithub size="30px" />
          </Link>
          <Box mx={2} />
          <Link href="mailto:udit.malshe10@outlook.com">
            <FaEnvelope size="30px" />
          </Link>
          <Box mx={2} />
          <Link href="#">
            <FaMapMarkerAlt size="30px" />
          </Link>
        </Center>
        <Center>
          {/* const variable = ["Web Developer 👨🏻‍💻", "Backend Developer ⚙️", "App Developer 📱", "Soccer Enthusiast ⚽️", "Gym Rat 💪🏻"]; */}
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            'I am a Software Developer',
            1000,
            'I am a tech enthusiast',
            1000,
          ]}
          speed={50}
          style={{ fontSize: '2em' }}
          repeat={Infinity}
        />
        </Center>
        </Box>
        {/* </GlowingStarsBackgroundCard> */}
        </VStack>
        </Box>
       {/* <Box mt={5} id="about">
       <Heading as="h2" size="lg">About</Heading>
        <Box mt={5} p={5} borderWidth={1} borderRadius="lg">
          <Text>
          A versatile and proactive software enthusiast, excelling in dynamic team environments. My keen ability to adapt to evolving challenges and my ever-growing hunger for learning set me apart. I thrive on social interactions like attending code nights and meet-ups, bringing not only strong technical skills but also a collaborative and engaging presence to any project. With my deep understanding of web and app development, I am poised to make a signiVicant and unique contribution to the Vield of software development.
          </Text>
        </Box>
        </Box> */}
        <Box id="about">
        <div className="about">
        <Box border={'2px'} p={5} borderRadius={20} m={15}>
          <Text>
            A versatile and proactive software enthusiast, excelling in dynamic team environments. My keen ability to adapt to evolving challenges and my ever-growing hunger for learning set me apart. I thrive on social interactions like attending code nights and meet-ups, bringing not only strong technical skills but also a collaborative and engaging presence to any project. With my deep understanding of web and app development, I am poised to make a significant and unique contribution to the Vield of software development.
          </Text>
          </Box>
        </div>
        </Box>
        <Box mt={5} id="skills">
          <Heading as="h2" size="lg">Key Skills</Heading>
          <Wrap mt={3}>
            <WrapItem>
              <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
                <Heading fontSize="xl">Web Development</Heading>
                <Text mt={4}>Node JS, React JS, Bootstrap, HTML5, CSS</Text>
              </Box>
            </WrapItem>
            {/* Add more skills as needed */}
            <WrapItem>
              <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
                <Heading fontSize="xl">CI/CD</Heading>
                <Text mt={4}>GitHub Actions, Git</Text>
              </Box>
            </WrapItem>
            <WrapItem>
              <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
                <Heading fontSize="xl">Key Programming Languages</Heading>
                <Text mt={4}>Python, Javascript and Java</Text>
              </Box>
            </WrapItem>
            <WrapItem>
              <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
                <Heading fontSize="xl">App Development</Heading>
                <Text mt={4}>Swift (iOS, iPadOS), SwiftUI, UIKit, WidgetKit, CoreData</Text>
              </Box>
            </WrapItem>
            <WrapItem>
              <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
                <Heading fontSize="xl">Backend Development</Heading>
                <Text mt={4}>API development, Spring-boot, Javalin, JDBC</Text>
              </Box>
            </WrapItem>
            <WrapItem>
              <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
                <Heading fontSize="xl">More</Heading>
                <Text mt={4}>Communication, SQLite, Agile Development, Problem Solving, Object Oriented Programming(OOP), C++, Swift StoryBoards, DSA, XCTests, JUnit, Kali Linux, NumPy, Pandas,MySQL, MVC, MV, MVVM, AWS EC2, AWS Beanstalk, JWT, Docker, Axios, Solidity, Smart-Contracts.</Text>
              </Box>
            </WrapItem>
          </Wrap>
        </Box>
        <Box mt={5} id="achievements">
          <Heading as="h2" size="lg">Achievements</Heading>
          <Box mt={3} p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading fontSize="xl">2nd Prize in CodeQuest 2023</Heading>
            <Text mt={4}>
              Secured the 2nd position in CodeQuest 2023, a prestigious coding competition that involved a game of competing on various maps. During the competition, I leveraged my expertise in Python programming. To enhance the bot’s capabilities, we used the CQ23 library, which facilitated smooth communication between my code and the game server through JSON messages. This achievement not only demonstrates my proficiency in software development but also showcases my strategic thinking and problem-solving abilities in a competitive environment.
              <br /><strong>Tech Stack: Python, CQ23, Docker.</strong>
            </Text>
          </Box>
        </Box>
        <Box mt={5} id="projects">
          <Heading as="h2" size="lg">Projects</Heading>
          <Wrap mt={3}>
            <WrapItem>
              <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
                <Heading fontSize="xl">Superprice</Heading>
                <Text mt={4}>
                  A dynamic grocery shopping website, enabling users to effortlessly compare item prices across various stores, ultimately helping them save money. Beyond showcasing my technical skills, this project shows my ability to collaborate effectively within a team and introduced me to agile development methodologies, CI/CD processes, and the intricacies of Scrum and Sprint practices. <Link href="https://github.com/username/superprice" isExternal>Repository link</Link>.
                  <br /><strong>Tech stack: Spring Boot, React JS, AWS Beanstalk, AWS EC2, Docker, JWT, MySQL, Bootstrap, CI, Git.</strong>
                </Text>
              </Box>
            </WrapItem>
            <WrapItem>
              <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
                <Heading fontSize="xl">PumpBuddy</Heading>
                <Text mt={4}>
                  Designed and built an engaging iOS app with SwiftUI, specifically tailored for users seeking to track their workouts and achieve their desired weight goals. This app empowers users to add new workouts, access preset workout routines for on-the-go fitness, and visualise their weight progress through intuitive graphical representations. This project not only highlights my advanced Swift skills but also reflects my creative approach to crafting user-friendly and interactive mobile applications.
                  <br /><strong>Tech stack: Swift, SwiftUI, CoreData, XCTests, WidgetKit, UIKit, Git.</strong>
                </Text>
              </Box>
            </WrapItem>
            <WrapItem>
              <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
                <Heading fontSize="xl">Weather App</Heading>
                <Text mt={4}>
                  Crafted a command line JavaScript application using the Node.js framework that delivers accurate and real-time weather summaries for any user-specified address. Employed the latest APIs, such as weatherstack and positionstack, and integrated them seamlessly with npm modules like request and axios to create a flawless user experience. Showcases an advanced skill set in Node.js development, API integration, and demonstrates a talent for creating innovative and practical applications.
                  <br /><strong>Tech stack: Node JS, Axios, API Integration, Git.</strong>
                </Text>
              </Box>
            </WrapItem>
          </Wrap>
        </Box>
        <Box mt={5} id="voluntary">
          <Heading as="h2" size="lg">Voluntary Work</Heading>
          <Box mt={3} p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading fontSize="xl">Organising Committee Member</Heading>
            <Text mt={4}>Google Developer Student Club RMIT | Dec 2023 - Present</Text>
            <Heading fontSize="xl" mt={3}>Vice President</Heading>
            <Text mt={4}>RMIT Information Security Collective | Nov 2023 - Present</Text>
            <Heading fontSize="xl" mt={3}>Community</Heading>
            <Text mt={4}>Google Development Group (GDG) HackNights by Mantel Group</Text>
          </Box>
        </Box>
        <Box mt={5} id="hobbies">
          <Heading as="h2" size="lg">Hobbies & Interests</Heading>
        <Box mt={5} p={5} borderWidth={1} borderRadius="lg">
          <Text>
            Insert hobbies and interests paragraph here. This is a description of my hobbies and interests.
          </Text>
        </Box>
        </Box>
        <Box mt={5} id="education">
          <Heading as="h2" size="lg">Education</Heading>
          <Box mt={3} p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Text>
              Insert education details here.
            </Text>
          </Box>
        </Box>
      {/* </Box> */}
    </ChakraProvider>
  );
};

export default App;
