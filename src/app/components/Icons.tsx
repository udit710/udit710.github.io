import React from "react";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

const iconMapping: { [key: string]: any } = {
    "Node JS": FaIcons.FaNodeJs,
    "React JS": FaIcons.FaReact,
    "Ec2": SiIcons.SiAmazonec2,
    "Lambda": SiIcons.SiAwslambda,
    "Api gateway": SiIcons.SiAmazonapigateway,
    "S3": SiIcons.SiAmazons3,
    "Nginx": SiIcons.SiNginx,
    "Tailwind": SiIcons.SiTailwindcss,
    "Flask": SiIcons.SiFlask,
    "Django": SiIcons.SiDjango,
    "Express": SiIcons.SiExpress,
    "Next JS": SiIcons.SiNextdotjs,
    "Spring boot": SiIcons.SiSpringboot,
    "spring boot": SiIcons.SiSpringboot,
    // Programming Concepts (not all have specific icons, using generics where possible)
    "Object Oriented": FaIcons.FaCode,
    "Functional": FaIcons.FaProjectDiagram,
    "Scripting": FaIcons.FaKeyboard,
    "REST API": FaIcons.FaExchangeAlt,
    "Dynamo db": SiIcons.SiAmazondynamodb,
    "Jwt": FaIcons.FaJava,
    "Bootstrap": FaIcons.FaBootstrap,
    "Ci": FaIcons.FaDotCircle,
    // Cloud
    "AWS": SiIcons.SiAmazonaws,
    "Serverless": SiIcons.SiServerless,
    "Azure": SiIcons.SiMicrosoftazure,
    "GCP": SiIcons.SiGooglecloud,

    // App Development
    "SwiftUI": SiIcons.SiSwift,
    "Swift": SiIcons.SiSwift,
    "React Native": FaIcons.FaReact,
    "Flutter": SiIcons.SiFlutter,
    ".NET": SiIcons.SiDotnet,
    "SQL": FaIcons.FaDatabase,
    "Coredata": SiIcons.SiSwift,
    "Xctests": SiIcons.SiSwift,
    "Widgetkit": SiIcons.SiSwift,
    "Uikit": SiIcons.SiSwift,

    // CI/CD Tools
    "Git": FaIcons.FaGitAlt,
    "Docker": FaIcons.FaDocker,
    "Github Actions": FaIcons.FaGithub,
    "Linux": FaIcons.FaLinux,

    // Machine Learning
    "Tensorflow": SiIcons.SiTensorflow,
    "Pytorch": SiIcons.SiPytorch,
    "NLP": FaIcons.FaLanguage,
    "Pre-trained models": FaIcons.FaRobot,
    "CV": FaIcons.FaEye,

    // Soft Skills
    "Leadership": FaIcons.FaUserTie,
    "Communication": FaIcons.FaComments,
    "Team Work": FaIcons.FaUsers,
    "Agile": SiIcons.SiJira
};

export default iconMapping;