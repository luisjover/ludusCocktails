import { LiaCocktailSolid } from "react-icons/lia";


const Header = () => {
    return (
        <header className="flex flex-row justify-center items-center gap-5 h-[15dvh] bg-gradient-to-r from-green to-blue transition-height duration-300 ease-in-out 2xl:h-[10dvh]">
            <LiaCocktailSolid className="text-white w-20 h-20 transition-all duration-300 ease-in-out sm:w-12 sm:h-12" />
            <h1 className="text-3xl text-white font-semibold hidden sm:inline-block">Ludus Team Party!!</h1>
        </header>
    )
}

export default Header;