// Function to check if a drink has 6 or fewer ingredients
const has6OrLessIngredients = (drinkData: any) => {
    const ingredientKeys = Object.keys(drinkData).filter((key) => key.startsWith("strIngredient") && drinkData[key] !== null);
    return ingredientKeys.length <= 6;
};

