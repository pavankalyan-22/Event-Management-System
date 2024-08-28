import React, { Component } from "react";

export class Signup extends Component {
	render() {
		return (
			<div>
				<h2>Signup Page</h2>
				{/* Add your signup form here */}
				<form>
					<input type="text" placeholder="Username" required />
					<input type="password" placeholder="Password" required />
					<button type="submit">Signup</button>
				</form>
			</div>
		);
	}
}

export default Signup;
