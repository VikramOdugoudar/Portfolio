import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
	let date = new Date();
	let year = date.getFullYear();
	return (
		<Container fluid className="footer">
			<Row>
				<Col md="4" className="footer-copywright">
					<h3>Developed by Vikram Odugoudar</h3>
				</Col>
				<Col md="4" className="footer-copywright">
					<h3>Copyright © {year} Wittygamer32</h3>
				</Col>
				<Col md="4" className="footer-body">
					<ul className="footer-icons">
						<li className="social-icons">
							<a
								href="https://github.com/vikramodugoudar"
								style={{ color: "white" }}
							>
								<AiFillGithub />
							</a>
						</li>
						<li className="social-icons">
							<a
								href="https://www.linkedin.com/in/vikram-odugoudar-10b58618b//"
								style={{ color: "white" }}
							>
								<FaLinkedinIn />
							</a>
						</li>
						<li className="social-icons">
							<a
								href="https://www.instagram.com/wittygamer32/"
								style={{ color: "white" }}
							>
								<AiFillInstagram />
							</a>
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
	);
}

export default Footer;
