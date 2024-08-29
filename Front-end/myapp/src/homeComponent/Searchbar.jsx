import React, { useState } from "react";
import Cardcomponent from "./Cardcomponent";
import "./Searchbar.css";

const Searchbar = () => {
	const [query, setquery] = useState("");
	function handelSubmit(e) {
		e.preventDefault();

		// implement the operation for query like displaythe card
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
			<Cardcomponent />
		</>
	);
};

export default Searchbar;
