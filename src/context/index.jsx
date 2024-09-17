import { createContext, useState } from "react";


export const GloalContext = createContext(null);



export default function Globalstate({ children }) {
    const [searchParams, setSearchParams] = useState('');
    const [loading, setLoading] = useState(false);
    const [recipesList, setRecipesList] = useState([]);
    const [recipeDetailsData, setRecipeDetailsData] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParams}`)
            const data = await res.json();
            if (data.data.recipes) {
                setRecipesList(data.data.recipes);
                setLoading(false);
                setSearchParams("")
            }
        } catch (e) {
            console.error(e)
        }
    }
    return (
        <GloalContext.Provider value={{ searchParams, setSearchParams, handleSubmit, loading, recipesList, recipeDetailsData, setRecipeDetailsData }}>
            {children}
        </GloalContext.Provider>
    )
}