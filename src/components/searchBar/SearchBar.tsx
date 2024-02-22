
import "./searchbar.css";
import { useState, useEffect, ChangeEvent } from "react";


type SearchBarProps = {
    allIngredientsList: string[] | null;
    onOptionSelect: (option: string) => void;
}


const SearchBar = ({ allIngredientsList, onOptionSelect }: SearchBarProps) => {

    const [searchTerm, setSearchTerm] = useState<string>("");
    const [filteredOptions, setFilteredOptions] = useState<string[] | null>(null);



    useEffect(() => {
        // Filter options based on searcchTerm
        const filtered = allIngredientsList?.filter(ingredient =>
            ingredient.toLowerCase().includes(searchTerm?.toLowerCase())
        );

        filtered && setFilteredOptions(filtered);
    }, [searchTerm, allIngredientsList]);


    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleOptionClick = (option: string) => {
        setSearchTerm(option);
        onOptionSelect(option);
    };


    return (

        <div className="search-container">
            <input
                name="search-input"
                className="search-input"
                type="text"
                placeholder="Search ingredient..."
                value={searchTerm ? searchTerm : ""}
                onChange={handleInputChange}
            />

            {/* Render dropdown if there are any filtered options matching searchterm after third letter or "missing ingredient" if not */}

            {searchTerm.length >= 3 ? (
                <ul className="search-dropdown">
                    {filteredOptions?.length && filteredOptions.length > 0 ? (
                        filteredOptions.map(option => (
                            <li
                                className="dropdown-item"
                                key={option}
                                onClick={() => handleOptionClick(option)}
                            >
                                {option}
                            </li>
                        ))
                    ) : (
                        <li className="dropdown-error">Ingredient not available</li>
                    )}
                </ul>
            ) : null}
        </div>
    )
}


export default SearchBar;