import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
	return (
		<Typewriter
			options={{
				strings: [
					"Web Developer",
					"Game Development Enthusiast",
					"Smart Contracts Enthusiast",
					"Public Speaking Enthusiast",
				],
				autoStart: true,
				loop: true,
				deleteSpeed: 50,
			}}
		/>
	);
}

export default Type;
