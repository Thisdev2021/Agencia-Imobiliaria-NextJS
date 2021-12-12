import axios from 'axios';

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '205ce07e6bmsh0d43e41b336249dp110d6bjsn11b3c5a02d11'
        }
    });

    return data;
}