import { FilterProvider } from "../contexts/SearchFilterContext";
import { Content } from "../components/content";

const MainPage = () => {

    return (

        <main className="flex gap-[35px] my-0 mx-auto pt-[30px] min-h-[80dvh] max-w-[1500px] ">
            <FilterProvider>
                <Content />
            </FilterProvider>
        </main>

    )
}

export default MainPage;