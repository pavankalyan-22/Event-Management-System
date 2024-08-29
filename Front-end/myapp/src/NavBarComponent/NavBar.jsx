import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Searchbar from "../homeComponent/Searchbar";
import Cardcomponent from "../homeComponent/Cardcomponent";

class NavBar extends Component {
	render() {
		return (
			<Router>
				<nav style={styles.nav}>
					<h1 style={styles.logo}>MyApp</h1>
					<ul style={styles.navLinks}>
						<li style={styles.navItem}>
							<Link to="/" style={styles.link}>
								Home
							</Link>
						</li>
						<li style={styles.navItem}>
							<Link to="/signup" style={styles.link}>
								Signup
							</Link>
						</li>
						<li style={styles.navItem}>
							<Link to="/login" style={styles.link}>
								Login
							</Link>
						</li>
					</ul>
				</nav>
				<Routes>
					<Route path="/signup" element={<Signup />} />
					<Route path="/login" element={<Login />} />
					<Route path="/" element={<Searchbar />} />
					<Route path="/" element={<Cardcomponent />} />
				</Routes>
			</Router>
		);
	}
}

const styles = {
	nav: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		padding: "1rem",
		background: "purple",
		color: "white",
	},
	logo: {
		fontSize: "1.5rem",
	},
	navLinks: {
		listStyle: "none",
		display: "flex",
		gap: "1rem",
	},
	link: {
		color: "white",
		textDecoration: "none",
	},
};

export default NavBar;
