import { currentSearchFilterContext } from "../../contexts/SearchFilterContext";
import { useContext } from "react"

// Custom hook to easily access and use the filter context
const useSearchFilterContext = () => useContext(currentSearchFilterContext);

export default useSearchFilterContext;