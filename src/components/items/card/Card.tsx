import "./card.css";
import { AppDrinkData } from "../../../types/DrinkData";


const Card = ({ drink }: { drink: AppDrinkData }) => {
    return (
        <div className="card-container">
            <div>
                {drink.strDrinkThumb ? (
                    <img src={drink.strDrinkThumb} alt={`${drink.strDrink} cocktail image`} className="image" />
                ) : (
                    <span>No image available</span>
                )}
            </div>
            <h3>{drink.strDrink}</h3>
            <div className="ingredients-container">
                <div className="ingredients">
                    {drink.ingredients.map((ingredient, index) => (
                        <p key={`ingredient-${index}`}>{ingredient}</p>
                    ))}
                </div>
                <div className="measures">
                    {drink.measures.map((measure, index) => (
                        <p key={`measure-${index}`}>{measure}</p>
                    ))}
                </div>
            </div>
            <div className="instructions">
                <p>{drink.strInstructions}</p>
            </div>

        </div>
    )
}

export default Card