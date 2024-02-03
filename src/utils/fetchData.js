export const recipeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '295f8cb924mshcdca73cfafe2396p1a8b26jsn134f3c7cd0a4',
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