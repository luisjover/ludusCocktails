import "./content.css";
import { useEffect, useState } from "react";
import SearchBar from "../searchBar/SearchBar";
import List from "../items/list/List";
import { ingredients } from "../../api/ingredients";
import { IngredientsListData } from "../../types/IngredientData";
import { getAllDrinksByIngredient } from "../../api/drinks";




const Content = () => {

    const [allIngredients, setAllIngredients] = useState<string[] | null>(null);

    useEffect(() => {
        ingredients.getAll()
            .then((response: { data: IngredientsListData | null, success: boolean, error?: string }) => {
                if (response.success && response.data) {
                    const ingredientsList = response.data.drinks.map(
                        (ingredient) => ingredient.strIngredient1
                    );
                    setAllIngredients(ingredientsList);
                } else {
                    console.error("Error fetching data:", response.error);

                }
            })
            .catch((error) => {
                console.error("Unexpected error:", error);
            });
    }, []);

    const handleOptionSelect = (selectedOption: string) => {
        getAllDrinksByIngredient(selectedOption)
            .then((response) => {

            })

    };



    return (
        <div className="content-container">
            <SearchBar
                allIngredientsList={allIngredients}
                onOptionSelect={handleOptionSelect}
            />
            <div className="list-container">
                {/* <List /> */}
            </div>
        </div>
    )
}

export default Content;