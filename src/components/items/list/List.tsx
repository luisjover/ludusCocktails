import "./list.css";
import { AppDrinkData } from "../../../types/DrinkData";
import { Card } from "../card";



const List = ({ drinks }: { drinks: AppDrinkData[] }) => {

    return (
        <div className="list-container">
            {drinks.map((drink) => (
                <Card
                    key={drink.idDrink}
                    drink={drink}
                ></Card>
            ))}

        </div>
    )
}

export default List