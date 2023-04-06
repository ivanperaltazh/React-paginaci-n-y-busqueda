

 export const searchFilter = (data = [], searchText = '')  => {

  if (searchText.length === 0 ){return data;}

  let pattern = searchText.trim();

  return data.filter(item => {
      let regExp = new RegExp('('+pattern+')'+'+', "i"); //i -> flag no diferencia mayúsculas de minúsculas.
      // let filteredItems = regExp.test(item.name); // buscar por un paramentro, nombre
      let filteredItems = regExp.test(item.name) || regExp.test(item.id); // buscar por 2 o más parametros en este caso por nombre y uso
      console.log("filteredItems::", filteredItems);
      return filteredItems;
  });
}


/*
'^'+pattern   (que coincida con el patron al inicio de la cadena)
pattern+'+'   (que coincida con el patron una o más veces) (la mejor para esto)
*/