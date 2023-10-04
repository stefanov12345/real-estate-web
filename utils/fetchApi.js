import axios from 'axios';
const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async( url) => {
    const {data} = await axios.get((url), {

        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': 'e56a3eaee6msh909544dcd69ea22p142240jsn51318aace59b'
        }

    });
    return data;
}