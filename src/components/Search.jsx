import { useEffect, useState } from "react"
import { searchFilter } from "../utils/searchFilter";


const Search = ({ items, handleSudmit }) => {

  const [state,setSearch] = useState('');
  const [fiterSearch,setFilterSeach] = useState([]);


  const handledChange =  (event) => {
      setSearch(event.target.value.trim());
  }

  useEffect(() => {
    if(!state) {  // Si termino de busqueda vacio borramos filtros y retornamos items
      handleSudmit(items);
      setFilterSeach([]);
    }; 
  }, [state])

  
  const onSudmit = (event) => {
    event.preventDefault();
    let filter =  searchFilter(items, state);
    
    if( filter.length > 0 && (filter.length < items.length) ){
         handleSudmit(filter);
         setFilterSeach(filter)
      } else { 
         handleSudmit([]);  
         setFilterSeach([]);
      }
 }

 const onClear = (event) => {
    event.preventDefault();
        handleSudmit(items);
        setFilterSeach([]);
        setSearch('');
 }


  return (
        <form onSubmit={onSudmit}>
            <input  type="text"  name="search" value={state}   
                    onChange={ handledChange }  placeholder="buscar"/>
               { !!state && <button type="button" onClick={ onClear}>X</button> }
               <button type="button" onClick={ onSudmit } disabled={!state} >search</button>

                {/* NOTA: tambien se puede mostrar los alternativamente solo uno de los dos botones */}
                {/* { fiterSearch.length > 0 && (fiterSearch.length < items.length) && state ?
               <button type="button" onClick={ onClear}>X</button>
              :
               <button type="button" onClick={ onSudmit } disabled={!state} >search</button>
            } */}
        </form>
  )
} 

export default Search;


           