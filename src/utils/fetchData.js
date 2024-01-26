export const recipeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '489d6caaddmshf356c9aa224e3dfp16fbccjsna5c42e96daf0',
        'X-RapidAPI-Host': 'low-carb-recipes.p.rapidapi.com'
      }
}

export const fetchData = async (url, options)=> {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}