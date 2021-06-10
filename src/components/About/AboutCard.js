import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
	return (
		<Card className="quote-card-view">
			<Card.Body>
				<blockquote className="blockquote mb-0">
					<p style={{ textAlign: "justify" }}>
						Hi Everyone, I am{" "}
						<span className="purple">Vikram Odugoudar </span>
						from <span className="purple"> Hubli, India.</span>
						<br />I am a{" "}
						<b>
							<span className="purple">3rd Year</span>{" "}
						</b>
						CSE Undergrad in KLE Technological University, Hubli.
						<br />
						<br />
						Apart from coding, some other activities that I love to
						do!
					</p>
					<ul>
						<li className="about-activity">
							<ImPointRight /> Binge-Watching
						</li>
						<li className="about-activity">
							<ImPointRight /> Playing With Dogs
						</li>
						<li className="about-activity">
							<ImPointRight /> Travelling
						</li>
					</ul>

					<p
						style={{
							marginBlockEnd: 0,
							color: "rgb(155 126 172)",
							fontSize: "2rem",
						}}
					>
						"Your Adrenaline rush is what makes you or breaks you!"{" "}
					</p>
					<footer
						className="blockquote-footer"
						style={{ fontSize: "1.5rem" }}
					>
						Vikram Odugoudar
					</footer>
				</blockquote>
			</Card.Body>
		</Card>
	);
}

export default AboutCard;
