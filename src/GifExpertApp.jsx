import { useState } from "react"
import { AddCategory, GifGrid } from "./components";    

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = ( newCategory ) => {


    if ( categories.includes( newCategory ) ) return ; //* Evalua que no se añada el mismo nombre en el arreglo de categories

    setCategories([ newCategory,...categories ]);
  }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory onNewCategory={ onAddCategory }  />
          
          { 
            categories.map(category => (
              <GifGrid
                key={ category }
                category={ category } 
              />
            )) 
          }
          
    </>
  )
}
