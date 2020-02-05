import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

//create your first component
export function Home() {
	return (
		<React.Fragment>
			<Navbar />
			<Jumbotron />
		</React.Fragment>
	);
}

export default Home;
