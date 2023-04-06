import { useEffect, useState } from "react"


const initialOptions = [ 5, 7, 10, 15, 20];

const Select = ({ options, handleSudmit, label, inialValue}) => {

    const [optionsPages, setOptionsPages] = useState( initialOptions );
    const [optionSelected, setoptionSelected] = useState( inialValue || 5 );
    
    useEffect(() => {
        handleSudmit(optionSelected);
    }, [optionSelected])


    useEffect(() => {
        if(options.length > 0){
            setOptionsPages(options);
          } else { setOptionsPages( initialOptions ); }
    }, [options])
    

    const handledChange =  (event) => {
        setoptionSelected(event.target.value);  
    }

  return (
    <div style={{diplay: "flex"}}>
        <label >{ label }</label>
        <select name="selectNumPages" onChange={ handledChange } value={optionSelected}>
            { 
            optionsPages.map (option =>   <option key={option} value={option}> { option }</option>)     
            }
        </select>
    </div>
  )
}

export default Select