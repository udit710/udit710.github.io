import next from "next";
import ProjectCard from "../componentCards/ProjectCard";
import cart from "../../../public/cart.jpeg";
import pumpbuddy from "../../../public/pumpbuddy.jpeg";
import aws from "../../../public/aws.jpeg";
import { useState } from "react";
import ProjectFilterDropdown from "../componentCards/ProjectFilterDropdown";

export enum ProjectTags {
    FullStack = "Full Stack",
    ML = "ML/AI",
    Mobile = "Mobile",
    Cloud = "Cloud",
    CICD = "CI/CD",
}

function Projects() {

    const [tag, setTag] = useState<string>("");
    function filterProjects(tag: string) {
        setTag(tag);
    }

    return (



        <div className="md:p-6 p-0">
            <div className="flex">
                <h1 className="flex-1 relative font-[Times] text-3xl mb-5">Projects</h1>
                <span className="flex-2 justify-end items-center font-mono">
                <ProjectFilterDropdown filterProjects={filterProjects} />
                </span>
            </div>
            <br />
            <span className="flex-1 font-mono">
            {tag == "" && <p className="text-gray-600">Showing all projects</p>}
            {tag && <p className="flex-1 text-gray-600">Showing projects in {tag}</p>}
            {tag && <button onClick={() => setTag("")} className="flex-2 text-blue-500 underline">Clear Filter</button>}</span>

            <br /><br />

            {[ProjectTags.CICD,ProjectTags.Cloud,""].includes(tag) &&
            <ProjectCard
                tag={[ProjectTags.ML]}
                projectName="SiteDrop"
                description="The simplest way to host static websites on AWS with CloudFront CDN. SiteDrop automates the entire process of deploying static websites to AWS using S3 and CloudFront, with Terraform managing the infrastructure and GitHub Actions handling the deployment pipeline."
                shortDescription="The simplest way to host static websites on AWS with CloudFront CDN. SiteDrop..."
                skills={["IaC", "Terraform", "AWS S3", "CloudFront", "GitHub Actions", "CDN", "CI/CD"]}
                date="Sep '25"
                imageSrc={""}
                link=""
                githubUrl="https://github.com/udit710/SiteDrop"
            />
            }

            {[ProjectTags.ML,""].includes(tag) &&
            <ProjectCard
                tag={[ProjectTags.ML]}
                projectName="Student Performance Prediction"
                description="Worked on an end-to-end ML pipeline to train, test, and deploy model. Model uses variables like student age, household income, and more to predict final score. Built an ETL pipeline to clean and preprocess data using Pandas and Numpy. Deployed using AWS and Docker."
                shortDescription="Worked on an end-to-end ML pipeline to train, test, and deploy model..."
                skills={["Python", "Pandas", "Numpy", "Skicit-learn", "Flask", "AWS ECR", "Ec2", "CodePipeline", "Beanstalk", "Docker"]}
                date="Dec '24"
                imageSrc={""}
                link=""
                githubUrl="https://github.com/udit710/ML-Project"
            />
            }

            {[ProjectTags.FullStack, ProjectTags.ML,""].includes(tag) &&
            <ProjectCard
                tag={[ProjectTags.ML, ProjectTags.FullStack]}
                projectName="Auto Job Application Tracker"
                description="Created a lightweight automation tool to keep track of jobs I have applied to. Used web scraping to get job data, summaries the data using GenAI and updates it on spreadsheets."
                shortDescription="Created a lightweight automation tool to keep track of jobs I have applied to..."
                skills={["Flask", "React JS", "Dynamo db", "Ec2", "Web Scraping", "GenAI integration", "Google APIs", "Git", "Pandas"]}
                date="Nov '24"
                link=""
                githubUrl="https://github.com/udit710/Auto-Job-Application-Tracker-Tool" imageSrc={""}
            />
            }

            {[ProjectTags.FullStack, ProjectTags.Cloud, ProjectTags.CICD,""].includes(tag) &&
            <ProjectCard
                tag={[ProjectTags.FullStack, ProjectTags.Cloud, ProjectTags.CICD]}
                projectName="Project Lead"
                description="Led a team of 6 to improve and develop a course alignment tool. Followed agile methodology to conduct scrums and conduct code reviews. Coordinated with team members and client to deliver a well structured product. Ensured CI/CD and constant reliability of linux servers."
                shortDescription="Led a team of 6 to improve and develop a course alignment tool..."
                skills={["Leadership", "Communication", "Management", "CI/CD", "Git", "Linux", "Python", "Pandas", "Networking"]}
                date="Oct '24"
                imageSrc={""}
                link=""
                githubUrl=""
            />
            }

            {[ProjectTags.ML,""].includes(tag) &&
            <ProjectCard
                tag={[ProjectTags.ML]}
                projectName="Sentiment Detection in Text and Images"
                description="Used two models and combined the multi-modal features to label the persuasion techniques used in memes. Achieved binary accuracy of over 80% and an F1-Score of about 0.55."
                shortDescription="Used two models and combined the multi-modal features to label persuasion techniques in memes..."
                skills={["Transfer Learning", "LSTM", "RNNs", "Tensorflow", "Pytorch", "Image Recognition", "Attention Mechanisms"]}
                date="Oct '24"
                imageSrc={pumpbuddy.src}
                link=""
                githubUrl=""
            />
            }

            {[ProjectTags.ML,""].includes(tag) &&
            <ProjectCard
                tag={[ProjectTags.ML]}
                projectName="HAR Classification"
                description="Developed a single pre-trained Image recognition model and fine-tuned it to perform multiple classification tasks.  Firstly, classify images into 40 categories of actions performed by humans, and to detect more than one entity. Achieved about 75% and 85% accuracy on both tasks respectively."
                shortDescription="Developed a single pre-trained image recognition model and fine-tuned it for multiple classification tasks..."
                skills={["Neural Networks", "Tensorflow", "Keras", "Python", "Data Analysis", "Image Recognition"]}
                date="Sep '24"
                imageSrc={cart.src}
                link=""
                githubUrl="https://github.com/udit710/Image-Recognition"
            />
            }

            {[ProjectTags.Cloud,ProjectTags.FullStack,""].includes(tag) &&
            <ProjectCard
                tag={[ProjectTags.Cloud, ProjectTags.FullStack]}
                projectName="Serverless Web App"
                description="Developed a serverless online music subscription application using AWS Lambda. Leveraged more AWS services, including S3 for storage and DynamoDB for database management. Deployed the application on an Ubuntu Server using EC2. Designed and implemented key components and functionalities, enhancing user experience and ensuring scalability."
                shortDescription="Developed a serverless online music subscription application using AWS Lambda. Leveraged more AWS..."
                skills={["React JS", "Dynamo db", "Ec2", "Lambda", "Api gateway", "S3", "Nginx", "Tailwind"]}
                date="Apr '24"
                imageSrc={aws.src}
                link="https://aws.amazon.com/pm/lambda/"
            />
            }

            {[ProjectTags.FullStack, ProjectTags.Cloud, ProjectTags.CICD,""].includes(tag) &&
            <ProjectCard
                tag={[ProjectTags.FullStack, ProjectTags.Cloud, ProjectTags.CICD]}
                projectName="Superprice"
                description="Developed a full-stack e-commerce platform, Superprice, that enables users to browse and purchase a wide range of products. This project involved building a RESTful API using Spring Boot, integrating with a React JS frontend, and deploying the application on AWS Beanstalk and EC2 instances. Implemented user authentication using JWT tokens, stored product data in a MySQL database, and ensured seamless deployment using Docker containers."
                shortDescription="Developed a full-stack e-commerce platform, Superprice, that enables users to browse and purchase a wide range of products..."
                skills={["Spring boot", "React JS", "Beanstalk", "Ec2", "Docker", "Jwt", "MySql", "Bootstrap", "Ci", "Git"]}
                date="Oct '23"
                imageSrc={cart.src}
                link="https://github.com/udit710/SuperPrice"
                githubUrl="https://github.com/udit710/SuperPrice"
            />
            }

            {[ProjectTags.Mobile,""].includes(tag) &&
            <ProjectCard
                tag={[ProjectTags.Mobile]}
                projectName="PumpBuddy"
                description="Designed and built an engaging iOS app with SwiftUI, specifically tailored for users seeking to track their workouts and achieve their desired weight goals. This app empowers users to add new workouts, access preset workout routines for on-the-go fitness, and visualize their weight progress through intuitive graphical representations."
                shortDescription="Designed and built an engaging iOS app with SwiftUI, specifically tailored for users seeking to track their workouts..."
                skills={["Swift", "SwiftUI", "Coredata", "Xctests", "Widgetkit", "Uikit", "Git"]}
                date="Sep '23"
                imageSrc={pumpbuddy.src}
                link="https://github.com/udit710/PumpBuddy"
                githubUrl="https://github.com/udit710/PumpBuddy"
            />
            }



        </div>
    );
}

export default Projects;
