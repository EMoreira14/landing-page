import React from "react";

const Card = props => {
	return (
		<div className="col-md-3 col-lg-3 col-sm-4 mt-3">
			<div className="card" style={{ width: "18rem" }}>
				<img
					src="https://s22380.pcdn.co/wp-content/uploads/solar_system_Photojournal_428px.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the card content.
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};

export default Card;
