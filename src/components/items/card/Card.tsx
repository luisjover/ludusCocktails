

export type DrinkProps = {
    id: string,
    name: string,
    instructions: string,
    alcoholic: string,
    image: string | undefined,
    ingredients: string[],
}

const Card = (drink: DrinkProps) => {
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