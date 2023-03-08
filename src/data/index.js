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

export const unknownStatus=async()=>{
    const api = `https://rickandmortyapi.com/api/character?status=unknown`
    const result = await axios(api)
    const count = result.data.info.count
    return count
}

export const deadStatus=async()=>{
    const api = `https://rickandmortyapi.com/api/character?status=dead`
    const result = await axios(api)
    const count = result.data.info.count
    return count
}

export const aliveStatus=async()=>{
    const api = `https://rickandmortyapi.com/api/character?status=alive`
    const result = await axios(api)
    const count = result.data.info.count
    return count
}

export const genders=async()=>{
    const api = `https://rickandmortyapi.com/api/character?page=8`
    const result = await axios(api)
    const count = result.data.results
    return count
}
