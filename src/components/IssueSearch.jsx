import { useState } from "react";

function IssueSearch({ onSearchChange }) {
    const [search, setSearch] = useState("")
    const searchChange = (event) =>{
        setSearch(event.target.value);
        onSearchChange(event.target.value);
    }

    return (
        <div>
            <input 
            type="text"
            value={search}
            placeholder="search here"
            onChange={searchChange} />
        </div>
    )
} 
export default IssueSearch;