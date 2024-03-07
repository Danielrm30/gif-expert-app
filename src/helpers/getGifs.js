export const getGifs = async(category) => {
    const api_key = 'kBckwnKmGuGD5lskEhgDo7sThoGdLxPn';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${ category }&limit=10`; //* en esta url se añaden query params como lo es el api_key, q que es un query de búsqueda y el límite de 20 resultados
    const respuesta = await fetch(url);
    const { data } = await respuesta.json(); //* desestructuramos data, ya que dentro de data, que es una arreglo contiene la información de la API
    
    const gifs = data.map( img => ({ //* hacemos un barrido del arreglo de data y devolvemos un objeto con propiedades de interés
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    
    return gifs;
}