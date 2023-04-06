import { sortArrayByAttribute } from "../utils/sort"



const Borrador = () => {

    const items = [
        { id: 1, name: "Jose 2", email: "jose@gmail.es", street: "Av Princesa" },
        { id: 2, name: "Ana 1", email: "ana@gmail.com", street: "Gran via" },
        { id: 3, name: "Zapatero 3", email: "zapatero@yahoo.com", street: "Mayor" }
      ];
      
      const sortedItemsAsc = sortArrayByAttribute(items, "name", "asc");
      const sortedItemsDesc = sortArrayByAttribute(items, "name", "desc");
      
      console.log("Asc::", sortedItemsAsc);
      console.log("Desc::", sortedItemsDesc);



  return (
    <div>Borrador ordenación</div>
  )
}

export default Borrador