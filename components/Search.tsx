import React from "react";
import { MdSearch } from "react-icons/md";

function Search() {
	return (
		<>
			<div className="input-group mb-3 search-item">
				<span className="input-group-text bg-white border-end-0 px-2" id="basic-addon1">
					<MdSearch size={20} />
				</span>
				<input
					type="text"
					className="form-control border-start-0 px-1"
					placeholder="Search..."
					aria-label="Username"
					aria-describedby="basic-addon1"
				/>
			</div>
		</>
	);
}

export default Search;
