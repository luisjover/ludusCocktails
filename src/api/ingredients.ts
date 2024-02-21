
import { axiosInstance } from "./base.api";

const endpoint = "list.php?i=list";

//GET ALL INGREDIENTS LIST
export const ingredients = {
    getAll: async () => {
        try {
            const response = await axiosInstance.get(endpoint);
            // Return obbject with data and state
            return { data: response.data, success: true };
        } catch (error) {

            console.error("Error fetching data:", error);
            return { data: null, success: false, error: "Error fetching data" };
        }
    }
};