import axiosclient from "../utils/ApiUtil/axios-client";

export async function fetchPokemonApi (){
    const fetchPokemonUrl = `/pokemon?offset=20&limit=50`
    const pokemon = await axiosclient.get(fetchPokemonUrl)
    console.log ("pokemon Result", pokemon)
    return pokemon 
}