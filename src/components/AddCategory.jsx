import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

const [inputValue, setInputValue] = useState('');

const onInputChange = ({ target }) => {
    setInputValue( target.value );
}

const onSubmit = (event) => {
    event.preventDefault();
    if ( inputValue.trim().length <= 1 ) return; //* no se añade al arreglo al dar enter o menos de 2 caracteres

    // setCategories( categories => [inputValue,...categories]);
    onNewCategory( inputValue.trim() );
    setInputValue('') //* al añadir algo al arreglo se limpia el input
}

  return (
    <form onSubmit={ onSubmit }>
        <input
          type="text" 
          placeholder="Buscar gifs"
          value={ inputValue }
          onChange={ onInputChange }
        />
    </form>
  )
}
