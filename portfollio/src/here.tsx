import React from 'react';
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
  IconButton
} from "@chakra-ui/react";
import { FaGithub, FaEnvelope, FaMapMarkerAlt, FaSun, FaMoon } from "react-icons/fa";

const Here = () => {
  const { toggleColorMode } = useColorMode();
  const colorMode = useColorModeValue("light", "dark");

  return (
    <ChakraProvider>
      <Box p={5}>
        <Center mb={5}>
          <IconButton
            aria-label="Toggle Color Mode"
            icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
          />
        </Center>
        <Center>
          <Heading as="h1" size="2xl">Hi, I am "Name"</Heading>
        </Center>
        <Center mt={3}>
          <Link href="https://github.com/username" isExternal>
            <FaGithub size="30px" />
          </Link>
          <Box mx={2} />
          <Link href="mailto:email@example.com">
            <FaEnvelope size="30px" />
          </Link>
          <Box mx={2} />
          <Link href="#">
            <FaMapMarkerAlt size="30px" />
          </Link>
        </Center>
        <Box mt={5} p={5} borderWidth={1} borderRadius="lg">
          <Text>
            Insert brief intro paragraph about me here. This is a description of who I am, my hobbies, profession, and interests.
          </Text>
        </Box>
        <Box mt={5}>
          <Heading as="h2" size="lg">Key Skills</Heading>
          <Wrap mt={3}>
            <WrapItem>
              <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
                <Heading fontSize="xl">Web Development</Heading>
                <Text mt={4}>Node JS, React JS, Bootstrap, HTML5, CSS</Text>
              </Box>
            </WrapItem>
            {/* Add more skills as needed */}
          </Wrap>
        </Box>
        <Box mt={5}>
          <Heading as="h2" size="lg">Achievements</Heading>
          <Box mt={3} p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading fontSize="xl">2nd Prize in CodeQuest 2023</Heading>
            <Text mt={4}>
              Secured the 2nd position in CodeQuest 2023, a prestigious coding competition that involved a game of competing on various maps. During the competition, I leveraged my expertise in Python programming. To enhance the bot’s capabilities, we used the CQ23 library, which facilitated smooth communication between my code and the game server through JSON messages. This achievement not only demonstrates my proficiency in software development but also showcases my strategic thinking and problem-solving abilities in a competitive environment.
              <br /><strong>Tech Stack: Python, CQ23, Docker.</strong>
            </Text>
          </Box>
        </Box>
        <Box mt={5}>
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
        <Box mt={5}>
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
        <Box mt={5} p={5} borderWidth={1} borderRadius="lg">
          <Text>
            Insert hobbies and interests paragraph here. This is a description of my hobbies and interests.
          </Text>
        </Box>
        <Box mt={5}>
          <Heading as="h2" size="lg">Education</Heading>
          <Box mt={3} p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Text>
              Insert education details here.
            </Text>
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Here;
