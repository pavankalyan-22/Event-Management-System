import Cardcomponent from "./Cardcomponent";

export function Events() {
	const events = [
		{
			eventid: "1",
			eventname: "adhi consert",
			eventdate: "22-22-2202",
			eventdetails: "maja soja",
			eventcatogory: "music",
		},
		{
			eventid: "2",
			eventname: "adhi consert",
			eventdate: "22-22-22022",
			eventdetails: "maja bdjjdbbd soja",
			eventcatogory: "music",
		},
		{
			eventid: "2",
			eventname: "adhi consert",
			eventdate: "22-22-22022",
			eventdetails: "maja bdjjdbbd soja",
			eventcatogory: "music",
		},
		{
			eventid: "2",
			eventname: "adhi consert",
			eventdate: "22-22-22022",
			eventdetails: "maja bdjjdbbd soja",
			eventcatogory: "music",
		},
		{
			eventid: "2",
			eventname: "adhi consert",
			eventdate: "22-22-22022",
			eventdetails: "maja bdjjdbbd soja",
			eventcatogory: "music",
		},
		{
			eventid: "2",
			eventname: "adhi consert",
			eventdate: "22-22-22022",
			eventdetails: "maja bdjjdbbd soja",
			eventcatogory: "music",
		},
		{
			eventid: "2",
			eventname: "adhi consert",
			eventdate: "22-22-22022",
			eventdetails: "maja bdjjdbbd soja",
			eventcatogory: "music",
		},
		{
			eventid: "2",
			eventname: "adhi consert",
			eventdate: "22-22-22022",
			eventdetails: "maja bdjjdbbd soja",
			eventcatogory: "music",
		},
		{
			eventid: "2",
			eventname: "adhi consert",
			eventdate: "22-22-22022",
			eventdetails: "maja bdjjdbbd soja",
			eventcatogory: "music",
		},
	];

	return (
		<>
			<div style={styles.cardSection}>
				{events.map((event) => (
					<Cardcomponent key={event.eventid} event={event} />
				))}
			</div>
		</>
	);
}

const styles = {
	cardSection: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around",
		padding: "30px",
	},
};
export default Events;
