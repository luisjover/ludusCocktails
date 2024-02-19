import { DrinkProps } from "../card/Card";
import Card from "../card/Card";

const List = (drinks: DrinkProps[]) => {
    return (
        <div>
            {drinks.map((drink) => (
                <Card
                    id={drink.id}
                    name={drink.name}
                    image={drink.image}
                    instructions={drink.instructions}
                    alcoholic={drink.alcoholic}
                    ingredients={drink.ingredients}
                ></Card>
            ))}

        </div>
    )
}

export default List