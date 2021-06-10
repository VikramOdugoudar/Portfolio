import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";

import sectors from "../../Assets/Projects/sectors.PNG";
import githubFinder from "../../Assets/Projects/githubFinder.png";
import covid from "../../Assets/Projects/Covid-19.png";
import ethereum from "../../Assets/Projects/ethereum.jpg";
import gameDev from "../../Assets/Projects/gameDev.jpg";
function Projects() {
	return (
		<Container fluid className="project-section">
			<Particle />
			<Container>
				<h1 className="project-heading">
					My Recent <strong className="purple">Works </strong>
				</h1>
				<p style={{ color: "white" }}>
					Here are a few projects I've worked on recently.
				</p>
				<Row
					style={{ justifyContent: "center", paddingBottom: "10px" }}
				>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={sectors}
							isBlog={false}
							title="Career Guidance Portal"
							description="A Career-Guidance Portal where users can search and find information about various job roles available in Indian Market, built with React.js, Tailwind-CSS. Users can look into the Career progression path which career trajectory of all available Job Roles."
							link="https://github.com/VikramOdugoudar/career-guidance-portal"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={githubFinder}
							isBlog={false}
							title="Github Finder"
							description="A Web Application where the user can search any github account and look into the details like top 5 repositories, followers, following, etc. Project was built using React JS, Material-UI, Context API and Github Public API "
							link="https://githubfinder-demo-vikramodugoudar.netlify.app/"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={covid}
							isBlog={false}
							title="Covid-19 Stats"
							description="A simple Static Application with focus on UI where static data is displayed regarding covid-19. This applicaiton was built as a part of Computer Netowrks Course Assignment, Project was built using HTML,S(CSS),CSS-Grid"
							link="https://vikram-vinay-covid.netlify.app/"
						/>
					</Col>
				</Row>
				<h1 className="project-heading">
					My Recent <strong className="purple">Blog </strong> Posts
				</h1>
				<p style={{ color: "white" }}>
					Do give a read to some of my blogs
				</p>
				<Row style={{ justifyContent: "center" }}>
					<Col md={4} className="blog-card">
						<BlogCard
							imgPath={ethereum}
							link="https://medium.com"
							title="Building DApps"
							site="medium.com"
						/>
					</Col>
					<Col md={4} className="blog-card">
						<BlogCard
							imgPath={gameDev}
							link="https://medium.com"
							title="Rise Of Game Development in India"
							site="medium.com"
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
