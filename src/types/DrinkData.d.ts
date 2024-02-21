
export interface DrinkByIngredientData {
    strDrink: string;
    strDrinkThumb: string;
    idDrink: string;
}

export interface DrinkByIngredientListData {
    drinks: DrinkByIngredientData[];
}

export interface DrinkIngredientsData {
    strIngredient1: string | null;
    strIngredient2: string | null;
    strIngredient3: string | null;
    strIngredient4: string | null;
    strIngredient5: string | null;
    strIngredient6: string | null;
    strIngredient7: string | null;
    strIngredient8: string | null;
    strIngredient9: string | null;
    strIngredient10: string | null;
    strIngredient11: string | null;
    strIngredient12: string | null;
    strIngredient13: string | null;
    strIngredient14: string | null;
    strIngredient15: string | null;
}

export interface DrinkMeasuresData {
    strMeasure1: string | null;
    strMeasure2: string | null;
    strMeasure3: string | null;
    strMeasure4: string | null;
    strMeasure5: string | null;
    strMeasure6: string | null;
    strMeasure7: string | null;
    strMeasure8: string | null;
    strMeasure9: string | null;
    strMeasure10: string | null;
    strMeasure11: string | null;
    strMeasure12: string | null;
    strMeasure13: string | null;
    strMeasure14: string | null;
    strMeasure15: string | null;
}

export interface DrinkInstructionsData {
    strInstructions: string | null;
    strInstructionsES: string | null;
    strInstructionsDE: string | null;
    strInstructionsFR: string | null;
    strInstructionsIT: string | null;
    strInstructionsZH_HANS: string | null;
    strInstructionsZH_HANT: string | null;
}

export interface DetailedDrinkData {
    idDrink: string;
    strDrink: string;
    strDrinkAlternate: string | null;
    strDrinkThumb: string | null;
    strTags: string | null;
    strVideo: string | null;
    strCategory: string | null;
    strIBA: string | null;
    strAlcoholic: string | null;
    strGlass: string | null;
    strImageSource: string | null;
    strImageAttribution: string | null;
    strCreativeCommonsConfirmed: string | null;
    dateModified: string;
}

export interface DetailedDrinkResponseData {
    drinks: Array<DetailedDrinkData & DrinkIngredientsData & DrinkMeasuresData & DrinkInstructionsData>;
}
