
import "./header.css";
import { LiaCocktailSolid } from "react-icons/lia";


const Header = () => {
    return (
        <header className="header">
            <LiaCocktailSolid className="header-icon" />
            <h1 className="header-title">Ludus Team Party!!</h1>
        </header>
    )
}

export default Header;