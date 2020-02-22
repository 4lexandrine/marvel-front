import React from "react";

const Search = ({ search, setSearch }) => {

    return (
        <>
            <div className="wrapper d-flex justify-center search-bar">
                <input type="search" value={search} placeholder="Que recherchez-vous ?" onChange={(e) => {
                    setSearch(e.target.value);
                }} />
            </div>
        </>
    );
}

export default Search;