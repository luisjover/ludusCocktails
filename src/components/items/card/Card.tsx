import { AppDrinkData } from "../../../types/DrinkData";
import randomCocktailImg from "../../../assets/images/random_cocktail.png"


const Card = ({ drink }: { drink: AppDrinkData }) => {
    return (


        <div className="flex flex-col rounded-[0.25rem] min-w-[211px] max-w-[270px] bg-white shadow-card overflow-hidden sm:min-w-52 sm:max-w-52">
            <div className="relative max-h-60">
                {drink.strDrinkThumb ? (
                    <img src={drink.strDrinkThumb} alt={`${drink.strDrink} cocktail image`} className="w-full h-full object-cover" />
                ) : (
                    <img src={randomCocktailImg} className="w-full h-full object-cover" />
                )}
            </div>

            <div className="relative pr-[10px] pb-[15px] pl-5 mt-4 mr-2 mb-2 max-h-[290px] overflow-y-scroll card-scroll main-scroll">
                <h2 className="relative mb-6 pb-5 font-bold text-center text-xl after:absolute after:block after:w-[50px] after:h-0.5 after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:bg-light-orange">{drink.strDrink}</h2>
                <div>
                    <div className="flex justify-between w-full text-[11px]">
                        <div className="text-left">
                            {drink.ingredients.map((ingredient, index) => (
                                <p className="mb-1" key={`ingredient-${index}`}>{ingredient}</p>
                            ))}
                        </div>
                        <div className="text-right">
                            {drink.measures.map((measure, index) => (
                                <p className="mb-1" key={`measure-${index}`}>{measure}</p>
                            ))}
                        </div>
                    </div>
                    <hr className="my-6 mx-auto w-[50px] border-t-2 border-light-orange" />
                    <p className="text-sm">{drink.strInstructions}</p>
                </div>
            </div>
        </div>

    )
}

export default Card