import React from "react";

const SearchBox = ({searchChange}) => {
    return (
        <div>
            <input
                className="pa3 bg-green"
                type="search"
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;