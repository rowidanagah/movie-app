import { useState } from "react";


const Search = (probs) => {
    console.log(probs.onSearch)

    const [searchKey, SetSearchKey] = useState();

    /*  
    moved to home section ->
    
    const handleChange = (e) => {
         console.log(e.target.value);
         SetSearchKey(e.target.value);
         };
    */
    console.log(searchKey)
    return (
        <div className="container m-4">
            <label htmlFor="search">Search: </label>
            <input class=" me-0 form-control rounded-pill col-12 signin_input" type="search"
                placeholder=" Search" aria-label="Search"
                onChange={probs.onSearch}
            />

        </div>
    );
};


export default Search;