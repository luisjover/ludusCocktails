import "./content.css";
import { useEffect, useState } from "react";
import { SearchBar } from "../searchBar";
import { List } from "../items/list";
import { ingredients } from "../../api/ingredients";
import { IngredientsListData } from "../../types/IngredientData";
import { getAllDrinksByIngredient, getDrinkById } from "../../api/drinks";
import { AppDrinkData } from "../../types/DrinkData";
import { hasSixOrLessIngredients, orderDrinksByAlcohol } from "../../utils/helpers/supportFunctions";




const Content = () => {

    const [allIngredients, setAllIngredients] = useState<string[] | null>(null);
    const [filteredDrinks, setFilteredDrinks] = useState<AppDrinkData[]>([]);
    const [defaultValues, setDefaultValues] = useState<boolean>(false);


    const handleOptionSelect = (selectedOption: string) => {
        getAllDrinksByIngredient(selectedOption)
            .then(async (response) => {
                const drinksWithSixOrLessIngredients: AppDrinkData[] = [];
                const visitedIds: Set<string> = new Set();

                while (visitedIds.size < response.drinks.length && drinksWithSixOrLessIngredients.length < 6) {
                    // Select random drink
                    const randomIndex = Math.floor(Math.random() * response.drinks.length);
                    const randomDrink = response.drinks[randomIndex];

                    // Check if already added drink by id
                    if (!visitedIds.has(randomDrink.idDrink)) {
                        const detailedResponse = await getDrinkById(randomDrink.idDrink);

                        if (hasSixOrLessIngredients(detailedResponse.drinks[0])) {
                            const detailedDrink = detailedResponse.drinks[0];

                            const ingredientsArray: string[] = [];
                            const measuresArray: string[] = [];

                            // To add ingredients and measures to corresponding arrays
                            for (let i = 1; i <= 6; i++) {

                                const ingredientKey = `strIngredient${i}` as keyof typeof detailedDrink;
                                const measureKey = `strMeasure${i}` as keyof typeof detailedDrink;

                                //Checking if ingredient or measure is not null before adding it
                                if (ingredientKey in detailedDrink && detailedDrink[ingredientKey] !== null) {
                                    const ingredient = detailedDrink[ingredientKey];
                                    ingredientsArray.push(`${ingredient}`);
                                }

                                if (measureKey in detailedDrink && detailedDrink[measureKey] !== null) {
                                    const measure = detailedDrink[measureKey];
                                    measuresArray.push(`${measure}`);
                                }
                            }

                            drinksWithSixOrLessIngredients.push({
                                idDrink: detailedDrink.idDrink,
                                strDrink: detailedDrink.strDrink,
                                strDrinkThumb: detailedDrink.strDrinkThumb,
                                strAlcoholic: detailedDrink.strAlcoholic,
                                strGlass: detailedDrink.strGlass,
                                strImageSource: detailedDrink.strImageSource,
                                ingredients: ingredientsArray,
                                measures: measuresArray,
                                strInstructions: detailedDrink.strInstructions,
                            });
                        }

                        // Add ID to visited ID´s Set to control not repeating drink
                        visitedIds.add(randomDrink.idDrink);
                    }
                }

                const orderedDrinks = orderDrinksByAlcohol(drinksWithSixOrLessIngredients);
                setFilteredDrinks(orderedDrinks)

            });
    };


    const getIngredients = async () => {
        try {
            const response: { data: IngredientsListData | null, success: boolean, error?: string } = await ingredients.getAll();
            if (response.success && response.data) {
                const ingredientsList = response.data.drinks.map(
                    (ingredient) => ingredient.strIngredient1
                );
                setAllIngredients(ingredientsList);
                setDefaultValues(true);
            } else {
                console.error("Error fetching data:", response.error);
            }
        } catch (error) {
            console.error("Unexpected error:", error);
        }
    };


    useEffect(() => {
        if (defaultValues) return;
        getIngredients();
    }, []);



    return (
        <div className="content-container">
            <SearchBar
                allIngredientsList={allIngredients}
                onOptionSelect={handleOptionSelect}
            />

            <List drinks={filteredDrinks} />
        </div>
    )
}

export default Content;