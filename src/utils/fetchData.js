export const recipeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0072b00d01mshf43674982c0aa50p15b915jsnb7b15a2259ee',
    'X-RapidAPI-Host': 'all-in-one-recipe-api.p.rapidapi.com'
    }
}

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '489d6caaddmshf356c9aa224e3dfp16fbccjsna5c42e96daf0',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
}