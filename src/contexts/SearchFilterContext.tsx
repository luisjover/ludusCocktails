import { useState, createContext } from "react"

type SearchFilterContextType = {
    searchFilter: string | null,
    changeSearchFilter: (filterParam: string | null) => void,

}

//Context to store the search filter state and the function to change it
export const currentSearchFilterContext = createContext<SearchFilterContextType>({
    searchFilter: null,
    changeSearchFilter: () => { },
});

//Provider to wrap the desired components and provide the context to them
export function FilterProvider({ ...props }) {
    const [searchFilter, setSearchFilter] = useState<string | null>(null);


    const changeSearchFilter = (filterParam: string | null) => {
        setSearchFilter(filterParam)
    };

    return (
        <currentSearchFilterContext.Provider value={{ searchFilter, changeSearchFilter }}>
            {props.children}
        </currentSearchFilterContext.Provider>
    )
}