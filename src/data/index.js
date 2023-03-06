import axios from "axios"

export const getFemale=async()=>{
    const api = `https://rickandmortyapi.com/api/character?gender=female`
    const result = await axios(api)
    const count = result.data.info.count
    return count
}
export const getMale=async()=>{
    const api = `https://rickandmortyapi.com/api/character?gender=male`
    const result = await axios(api)
    const count = result.data.info.count
    return count
}
export const getGenderless=async()=>{
    const api = `https://rickandmortyapi.com/api/character?gender=genderless`
    const result = await axios(api)
    const count = result.data.info.count
    return count
}

export const getNull=async()=>{
    const api = `https://rickandmortyapi.com/api/character?gender=unknown`
    const result = await axios(api)
    const count = result.data.info.count
    return count
}

