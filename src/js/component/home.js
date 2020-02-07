import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//create your first component
export function Home() {
	return (
		<React.Fragment>
			<Navbar />
			<Jumbotron />
			<div className="container">
				<div className="row">
					<div className="card-deck">
						<Card />
						<Card />
						<Card />
						<Card />
					</div>
				</div>
			</div>
			<div className="footer">
				<Footer />
			</div>
		</React.Fragment>
	);
}

export default Home;
