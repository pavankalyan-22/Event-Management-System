import React, { Component } from "react";
import { Link, Router } from "react-router-dom";

export class Admindashbord extends Component {
	render() {
		return (
			<>
				<Router>
					<div id="container">
						<div className="create">
							<Link to="/create" />
							ADD EVENT
						</div>
						<div className="read">
							<Link to="/read" /> READ Event
						</div>
						<div className="update">
							<Link to="/update" />
							UPDATE EVENT
						</div>
						<div className="delete">
							<Link to="/delete" />
							DELETE EVENT
						</div>
					</div>
				</Router>
			</>
		);
	}
}

export default Admindashbord;
