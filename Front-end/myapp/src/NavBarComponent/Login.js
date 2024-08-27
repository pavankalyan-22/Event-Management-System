import React, { Component } from "react";

export class Login extends Component {
	render() {
		return (
			<div>
				<h2>Login Page</h2>
				{/* Add your login form here */}
				<form>
					<input type="text" placeholder="Username" required />
					<input type="password" placeholder="Password" required />
					<button type="submit">Login</button>
				</form>
			</div>
		);
	}
}

export default Login;
