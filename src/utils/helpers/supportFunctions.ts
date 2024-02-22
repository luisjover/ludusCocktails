
import { AppDrinkData, DetailedDrinkData } from "../../types/DrinkData";


// Function to check if a drink has 6 or fewer ingredients
export const hasSixOrLessIngredients = (drink: DetailedDrinkData) => {
    // Verify strIngredient7 is null
    return drink.strIngredient7 === null;
};


//Function to order drinks array by alcohol content
export const orderDrinksByAlcohol = (drinks: AppDrinkData[]) => {
    const nonAlcoholic = drinks.filter(drink => drink.strAlcoholic === "Non alcoholic");
    const optionalAlcohol = drinks.filter(drink => drink.strAlcoholic === "Optional alcohol");
    const alcoholic = drinks.filter(drink => drink.strAlcoholic === "Alcoholic");

    return [...nonAlcoholic, ...optionalAlcohol, ...alcoholic];
};

