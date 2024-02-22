import axios, { AxiosResponse } from "axios";
import { DetailedDrinkResponseData, DrinkByIngredientListData } from "../types/DrinkData";



//GET ALL DRINKS BY INGREDIENT

export const getAllDrinksByIngredient = async (ingredient: string): Promise<DrinkByIngredientListData> => {

    const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
    try {
        const response: AxiosResponse<DrinkByIngredientListData> = await axios.get(endpoint);
        return response.data
    } catch (error) {
        console.log(error);
        throw error;
    }
}


//GET DETAIL DRINK BY ID

export const getDrinkById = async (drinkId: string): Promise<DetailedDrinkResponseData> => {

    const endpoint = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
    try {
        const response: AxiosResponse<DetailedDrinkResponseData> = await axios.get(endpoint);
        return response.data
    } catch (error) {
        console.log(error);
        throw error
    }
}