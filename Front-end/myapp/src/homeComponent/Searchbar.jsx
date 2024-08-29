import React, { useState } from "react";
import "./Searchbar.css";
import { Events } from "./Events";

const Searchbar = () => {
	const [query, setquery] = useState("");
	function handelSubmit(e) {
		e.preventDefault();
		setquery("");
		// implement the operation for query like display the card
	}
	return (
		<>
			<form onSubmit={handelSubmit} className="form">
				<input
					type="text"
					value={query}
					onChange={(e) => setquery(e.target.value)}
					placeholder="search..."
					className="search-input"
				/>
				<button type="submit" className="search-button">
					find
				</button>
			</form>
			<Events />
		</>
	);
};

export default Searchbar;
