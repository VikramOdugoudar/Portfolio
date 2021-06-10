import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/vikram.jpeg";
import Toolstack from "./Toolstack";
import Github from "./Github";

function About() {
	return (
		<Container fluid className="about-section">
			<Particle />
			<Container>
				<Row style={{ justifyContent: "center", padding: "10px" }}>
					<Col
						md={7}
						style={{
							justifyContent: "center",
							paddingTop: "30px",
							paddingBottom: "50px",
						}}
					>
						<h1
							style={{ fontSize: "2.1em", paddingBottom: "20px" }}
						>
							Know Me<strong className="purple">!</strong>
						</h1>
						<Aboutcard />
					</Col>
					<Col
						md={5}
						style={{ paddingTop: "4rem", paddingBottom: "50px" }}
						className="about-img vikramImg"
					>
						<Tilt>
							<img
								src={myImg}
								alt="about"
								className="img-fluid"
							/>
						</Tilt>
					</Col>
				</Row>
				<h1 className="project-heading">
					Development <strong className="purple">Skillset </strong>
				</h1>
				<Techstack />
				<h1 className="project-heading">
					<strong className="purple">Tools</strong> I use
				</h1>
				<Toolstack />
				<Github />
			</Container>
		</Container>
	);
}

export default About;
