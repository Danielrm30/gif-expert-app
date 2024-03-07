import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {

    
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
      const newImages = await getGifs(category);
      setImages(newImages); //* actualiza las imágenes
      setIsLoading(false);
    }
     
    useEffect( () =>{
      getImages();
    }, []) //* al dejar el arreglo de dependecias vacías, significa que el hook se va a disparar que se crea y constuye el componente
  
    return {
        images,
        isLoading
    }
}
