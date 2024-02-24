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


        <div className="grid grid-rows-[auto_1fr] gap-2.5 my-0 mx-[30px] sm:mx-auto sm:my-0">

            <div className="relative">
                <input type="text" id="searchbar" className="block px-2.5 py-[5px] w-full text-sm text-dark-gray bg-white rounded-md border-[1px] border-light-gray appearance-none focus:outline-none focus:ring-0 focus:searchbar-focus peer transition-all duration-300 ease-in-out sm:w-[460px] md:w-[720px]"
                    name="search-input"
                    placeholder=""
                    value={searchTerm ? searchTerm : ""}
                    onChange={handleInputChange}
                />
                <label htmlFor="searchbar" className="absolute text-sm text-gray duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 cursor-text">Search ingredient</label>
            </div>

            {/* Render dropdown if there are any filtered options matching searchterm after third letter or "missing ingredient" if not */}

            {searchTerm.length >= 3 ? (
                <ul className="list-none flex gap-[15px] overflow-x-scroll main-scroll search-scroll pb-2 sm:pb-0">
                    {filteredOptions?.length && filteredOptions.length > 0 ? (
                        filteredOptions.map(option => (
                            <li
                                className="inline-block px-2.5 py-[5px] text-sm font-bold text-center border-2 border-green text-blue bg-white cursor-pointer rounded-md transition-all duration-300 ease-in-out shrink-0 hover:bg-[#f59648] hover:text-white hover:border-white"
                                key={option}
                                onClick={() => handleOptionClick(option)}
                            >
                                {option}
                            </li>
                        ))
                    ) : (
                        <li className="inline-block px-2.5 py-[5px] text-sm font-bold text-center border-2 border-green bg-[#aba9a9] rounded-md">Ingredient not available</li>
                    )}
                </ul>
            ) : null}
        </div>
    )
}


export default SearchBar;