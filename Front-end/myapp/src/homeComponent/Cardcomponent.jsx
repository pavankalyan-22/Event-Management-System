import React, { Component } from "react";

export class Cardcomponent extends Component {
	render() {
		return (
			<div style={styles.cardSection}>
				{/* add card from admin */}
				<div style={styles.card}>
					<div id="title">title: hippop adthi</div>
					<div id="catogory">catogory: entertainment</div>
				</div>
			</div>
		);
	}
}

const styles = {
	carousel: {
		display: "flex",
		overflowX: "scroll",
		margin: "20px 0",
		padding: "10px",
		background: "#f5f5f5",
	},
	carouselItem: {
		minWidth: "300px",
		height: "200px",
		marginRight: "10px",
		background: "#ddd",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		fontSize: "1.5rem",
	},
	cardSection: {
		display: "flex",
		justifyContent: "space-around",
		padding: "20px",
	},
	card: {
		width: "30%",
		padding: "20px",
		background: "#fafafa",
		boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
		textAlign: "center",
	},
};

export default Cardcomponent;
