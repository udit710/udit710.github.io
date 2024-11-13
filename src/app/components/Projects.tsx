import next from "next";
import ProjectCard from "../componentCards/ProjectCard";
import cart from "../../../public/cart.jpeg";
import pumpbuddy from "../../../public/pumpbuddy.jpeg";
import aws from "../../../public/aws.jpeg";

function Projects() {
    return (
        <div className="md:p-6 p-0">
            <h1 className="font-[Times] text-3xl mb-5">Projects</h1>


            <ProjectCard 
                projectName="Auto Job Application Tracker"
                description="Created a lightweight automation tool to keep track of jobs I have applied to. Used web scraping to get job data, summaries the data using GenAI and updates it on spreadsheets."
                shortDescription="Created a lightweight automation tool to keep track of jobs I have applied to..."
                skills={["Flask", "React", "DynamoDB", "AWS EC2", "Web Scraping", "GenAI integration", "Google APIs", "Git", "Pandas"]}
                date="Sep '23"
                link=""
                githubUrl="" imageSrc={""}            
            />

            <ProjectCard
                projectName="Project Lead"
                description="Led a team of 6 to improve and develop a course alignment tool. Followed agile methodology to conduct scrums and conduct code reviews. Coordinated with team members and client to deliver a well structured product. Ensured CI/CD and constant reliability of linux servers."
                shortDescription="Led a team of 6 to improve and develop a course alignment tool..."
                skills={["Leadership", "Communication", "Management", "CI/CD", "Git", "Linux", "Python", "Pandas", "Networking"]}
                date="Sep '23"
                imageSrc={""}
                link=""
                githubUrl=""
            />

            <ProjectCard 
                projectName="HAR Classification"
                description="Developed a single pre-trained Image recognition model and fine-tuned it to perform multiple classification tasks.  Firstly, classify images into 40 categories of actions performed by humans, and to detect more than one entity. Achieved about 75% and 85% accuracy on both tasks respectively."
                shortDescription="Developed a single pre-trained image recognition model and fine-tuned it for multiple classification tasks..."
                skills={["Neural Networks", "Tensorflow", "Keras", "Python", "Data Analysis", "Image Recognition"]}
                date="Aug '23"
                imageSrc={cart.src}
                link=""
                githubUrl="https://github.com/udit710/Image-Recognition"
            />

            <ProjectCard 
                projectName="Sentiment Detection in Text and Images"
                description="Used two models and combined the multi-modal features to label the persuasion techniques used in memes. Achieved binary accuracy of over 80% and an F1-Score of about 0.55."
                shortDescription="Used two models and combined the multi-modal features to label persuasion techniques in memes..."
                skills={["Transfer Learning", "LSTM", "RNNs", "Tensorflow", "Pytorch", "Image Recognition", "Attention Mechanisms"]}
                date="Jul '23"
                imageSrc={pumpbuddy.src}
                link=""
                githubUrl=""
            />

            <ProjectCard 
                projectName="Serverless Web App"
                description="Developed a serverless online music subscription application using AWS Lambda. Leveraged more AWS services, including S3 for storage and DynamoDB for database management. Deployed the application on an Ubuntu Server using EC2. Designed and implemented key components and functionalities, enhancing user experience and ensuring scalability."
                shortDescription="Developed a serverless online music subscription application using AWS Lambda. Leveraged more AWS..."
                skills={["React JS", "Dynamo db", "Ec2", "Lambda", "Api gateway", "S3", "Nginx", "Tailwind"]}
                date="Apr '24"
                imageSrc={aws.src}
                link="https://aws.amazon.com/pm/lambda/"
            />

            <ProjectCard 
                projectName="Superprice"
                description="Developed a full-stack e-commerce platform, Superprice, that enables users to browse and purchase a wide range of products. This project involved building a RESTful API using Spring Boot, integrating with a React JS frontend, and deploying the application on AWS Beanstalk and EC2 instances. Implemented user authentication using JWT tokens, stored product data in a MySQL database, and ensured seamless deployment using Docker containers."
                shortDescription="Developed a full-stack e-commerce platform, Superprice, that enables users to browse and purchase a wide range of products..."
                skills={["Spring boot", "React JS", "Beanstalk", "Ec2", "Docker", "Jwt", "MySql", "Bootstrap", "Ci", "Git"]}
                date="Oct '23"
                imageSrc={cart.src}
                link="https://github.com/udit710/SuperPrice"
                githubUrl="https://github.com/udit710/SuperPrice"
            />

            <ProjectCard 
                projectName="PumpBuddy"
                description="Designed and built an engaging iOS app with SwiftUI, specifically tailored for users seeking to track their workouts and achieve their desired weight goals. This app empowers users to add new workouts, access preset workout routines for on-the-go fitness, and visualize their weight progress through intuitive graphical representations."
                shortDescription="Designed and built an engaging iOS app with SwiftUI, specifically tailored for users seeking to track their workouts..."
                skills={["Swift", "SwiftUI", "Coredata", "Xctests", "Widgetkit", "Uikit", "Git"]}
                date="Sep '23"
                imageSrc={pumpbuddy.src}
                link="https://github.com/udit710/PumpBuddy"
                githubUrl="https://github.com/udit710/PumpBuddy"
            />

                
        </div>
    );
}

export default Projects;
