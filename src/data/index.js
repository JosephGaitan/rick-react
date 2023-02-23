import axios from "axios";

export async function getCharacters() {
    const url = 'https://rickandmortyapi.com/api/character';
    const result = await axios.get(url)
    //console.log(result)
    return result.data
}

