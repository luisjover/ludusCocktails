// import axios from "axios";

import { axiosInstance } from "./base.api";

const endpoint = "list.php?i=list";

//GET ALL INGREDIENTS LIST
export const ingredients = {
    getAll: async () => {
        return await axiosInstance.get(endpoint)
    }

}



// export const getAllIngredients = async () => {
//     try {
//         const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
//         console.log(response.data);
//     } catch (error) {
//         console.error(error);
//     }
// }