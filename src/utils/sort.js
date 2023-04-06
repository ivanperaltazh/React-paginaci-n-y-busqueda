// Funcion para ordenar array de objetos: resive "arr" (array de objetos, la data),
//  el "attribute" ( atributo por el cual e quiere ordenar) y "order" direcion de ordenacion ( asc o desc )

export const sortArrayByAttribute = (arr, attribute, order) => {
    const sortedArray = arr.sort((a, b) => {
      let valA, valB;

      if (typeof a[attribute] === "string") {
        valA = a[attribute].toUpperCase();
        valB = b[attribute].toUpperCase();
      } else {
        valA = a[attribute];
        valB = b[attribute];
      }

      if (order === "asc") {
        if (valA < valB) {
          return -1;
        } else if (valA > valB) {
          return 1;
        }
        return 0;
      } else if (order === "desc") {
        if (valA > valB) {
          return -1;
        } else if (valA < valB) {
          return 1;
        }
        return 0;
      }

    });
    return sortedArray;
  }

  


  /* EJEMPLO:
        const items = [
        { id: 1, name: "Jose 2", email: "jose@gmail.es", street: "Av Princesa" },
        { id: 2, name: "Ana 1", email: "ana@gmail.com", street: "Gran via" },
        { id: 3, name: "Zapatero 3", email: "zapatero@yahoo.com", street: "Mayor" }
       ];
      
        const sortedItemsAsc = sortArrayByAttribute(items, "name", "asc");
        const sortedItemsDesc = sortArrayByAttribute(items, "name", "desc");
        
        console.log("Asc::", sortedItemsAsc);
        console.log("Desc::", sortedItemsDesc);

  */