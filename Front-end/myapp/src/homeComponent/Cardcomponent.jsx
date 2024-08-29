export function Cardcomponent({ event }) {
	return (
		<div style={styles.card}>
			<div id="title">{event?.eventname}</div>
			<div id="catogory">{event?.eventdate}</div>
			<div id="catogory">{event?.eventcatogory}</div>
		</div>
	);
}

const styles = {
	card: {
		width: "10%",
		margin: "3%",
		padding: "20px",
		background: "#fafafa",
		boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
		textAlign: "center",
	},
};

export default Cardcomponent;
