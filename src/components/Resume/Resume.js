import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Vikram-Odugoudar.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
	return (
		<Container fluid className="resume-section">
			<Particle />
			<Container>
				<Row className="resume">
					<Col md={6} className="resume-left">
						<h3 className="resume-title">Experience</h3>
						<Resumecontent
							title="JUNIOR Web Developer [Transil Inc]"
							date="August 2020 - December 2020"
							content={[
								"Built Front-End of a Educational Platform where users can search for job roles,scholarships, available courses,detailed information about a particular job role.",
								" Built the API with several end points to provide JSON output as the required job roles or details of the particular job role.",
								"Tech Stack User: React JS, Context API, Express JS and Tailwind CSS ",
							]}
						/>
						<h3 className="resume-title">
							Extracurricular Activities
						</h3>
						<Resumecontent
							title="Web Developer [ABC-2019 Technical Fest of ABC University]"
							content={[
								"Worked on creating the frontend-end of the website using Bootstrap, Javascript.",
							]}
						/>
						<Resumecontent
							title="Web Developer [ABC-2020 Technical Fest of ABC University]"
							content={[
								"Operated on developing the frontend end of the website using Bootstrap, Javascript and backend APIs using Node.js",
							]}
						/>
					</Col>
					<Col md={6} className="resume-right">
						<h3 className="resume-title">Education</h3>
						<Resumecontent
							title="KLE Technological Uniersity [KLE Tech, Hubli] "
							date="2018 - Present"
							content={[`CGPA: 7.90 (Till 5th Sem)`]}
						/>
						<Resumecontent
							title="12TH BOARD [Mahesh PU College,Hubli]"
							date="2015 - 2017"
							content={["Precentage: 84%"]}
						/>
						<Resumecontent
							title="10TH BOARD [Parivarthan Gurukul School,Hubli] "
							date="2005 - 2015"
							content={["Precentage: 88%"]}
						/>
						<h3 className="resume-title">Ranks and Achivements</h3>
						<Resumecontent
							title=""
							content={[
								"First Prize in Intel Ideation Camp [2019-2020]",
							]}
						/>
					</Col>
				</Row>
				<Row style={{ justifyContent: "center", position: "relative" }}>
					<Button variant="primary" href={pdf} target="_blank">
						<AiOutlineDownload />
						&nbsp;Download CV
					</Button>
				</Row>
			</Container>
		</Container>
	);
}

export default Resume;
