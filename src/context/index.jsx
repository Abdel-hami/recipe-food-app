import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const GloalContext = createContext(null);



export default function Globalstate({ children }) {
    const [searchParams, setSearchParams] = useState('');
    const [loading, setLoading] = useState(false);
    const [recipesList, setRecipesList] = useState([]);
    const [recipeDetailsData, setRecipeDetailsData] = useState(null);
    const [favoritesList, setfavoritesList] = useState([]);
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParams}`)
            const data = await res.json();
            if (data.data.recipes) {
                setRecipesList(data.data.recipes);
                setLoading(false);
                setSearchParams("");
                navigate("/")
            }
        } catch (e) {
            console.error(e)
            setLoading(false);
            setSearchParams("");
        }
    }
    function handleAddToFavorites(getCurrentItems) {
        let copyFavoriteListes = [...favoritesList];
        const index = copyFavoriteListes.findIndex(item=> item.id === getCurrentItems.id)
        if (index === -1){
            copyFavoriteListes.push(getCurrentItems)
        } else {
            copyFavoriteListes.splice(index)
        }
        setfavoritesList(copyFavoriteListes)
    }
    return (
        <GloalContext.Provider value={{
            searchParams,
            setSearchParams,
            handleSubmit,
            loading,
            recipesList,
            recipeDetailsData,
            setRecipeDetailsData,
            handleAddToFavorites,
            favoritesList
        }}>
            {children}
        </GloalContext.Provider>
    )
}