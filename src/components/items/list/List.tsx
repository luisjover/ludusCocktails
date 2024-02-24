// import "./list.css";
import { AppDrinkData } from "../../../types/DrinkData";
import { Card } from "../card";



const List = ({ drinks }: { drinks: AppDrinkData[] }) => {

    return (
        <div className="flex flex-row justify-center gap-6 pt-10 pb-[50px] px-10 flex-wrap max-w-[350px] sm:max-w-[540px] md:max-w-[800px] 2xl:flex-nowrap 2xl:max-w-full">
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