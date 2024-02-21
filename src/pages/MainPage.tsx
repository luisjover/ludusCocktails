
import "./mainpage.css";
import { FilterProvider } from "../contexts/SearchFilterContext";
import Content from "../components/content/Content";



const MainPage = () => {

    return (

        <main className="main-container">
            <FilterProvider>
                <Content />
            </FilterProvider>
        </main>

    )
}

export default MainPage;