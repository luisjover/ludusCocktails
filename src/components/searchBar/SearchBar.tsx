
import "./searchbar.css";
import useSearchFilterContext from "../../utils/hooks/useFilterContext";
import { useEffect } from "react";


const SearchBar = () => {

    //Custom hook to get the needed filter context states to use the searchbar
    const { searchFilter, changeSearchFilter } = useSearchFilterContext();

    //Function to handle the search filter changes and mutate the context state
    const handleSearchFilterChange = (searchParam: string) => {
        if (searchParam === "") {
            changeSearchFilter(null);
        } else {
            changeSearchFilter(searchParam);
        }
    }


    useEffect(() => {
        console.log(searchFilter)

    }, [searchFilter])


    return (

        <input
            className="search-input"
            type="text"
            placeholder="Search ingredient..."
            value={searchFilter ? searchFilter : ""}
            onChange={(e) => handleSearchFilterChange(e.target.value)}
        />

    )
}


export default SearchBar;