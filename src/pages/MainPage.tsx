
import { useEffect } from "react";
import { ingredients } from "../api/ingredients";
import "./mainpage.css";
import SearchBar from "../components/searchBar/SearchBar";
import List from "../components/items/list/List";
import { FilterProvider } from "../contexts/SearchFilterContext";





const MainPage = () => {


    useEffect(() => {
        ingredients.getAll().then((result: any) => {
            console.log(result.data)
        })


    }, [])



    return (

        <main>
            <FilterProvider>

            </FilterProvider>

        </main>

    )
}

export default MainPage;