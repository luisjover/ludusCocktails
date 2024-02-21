import DrinkData from "../../../types/DrinkData"


export type Props = {
    drink: DrinkData
}

const Card = ({ drink }: Props) => {
    return (
        <div>
            <div>
                <img src={drink.image} alt={`${drink.name} cocktail image`} />
            </div>
            <h3>{drink.name}</h3>
            {drink.ingredients.map((ingredient) => (
                <p key={ingredient}>{ingredient}</p>
            ))}
            <p>{drink.instructions}</p>

        </div>
    )
}

export default Card