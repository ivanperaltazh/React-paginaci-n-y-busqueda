import { useState } from 'react';
import PruebaPagination from '../components/PruebaPagination';
import Search from '../components/Search';
import Select from '../components/Select';


const PaginationDemo = () => {

  const dataItems =  () => Array.from(Array(150).keys()).map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));

    const initialState = {
        exampleItems: dataItems(),
        pageOfItems: []
    };

        
   const [state, setState] = useState( initialState);
   const { exampleItems, pageOfItems } = state;
   
   const [pageSize, setPageSize] = useState( 7);  // <Select  options={ [2, 5, 7, 10] } inialValue ={ pageSize } /> El valor de estado inical debe estar dentro del array del select
   const [maxPages, setMaxPages] = useState( 5 );  // <Select  options={ [1, 2, 3, 5] }  inialValue= { maxPages } /> El valor de estado inical debe estar dentro del array del select
   const [totalFilter, setTotalFilter] = useState( 0 );

     
   const onChangePage = (pageOfItems)  => { // actualización de items
        setState( {...state, 
                    pageOfItems: pageOfItems 
                } );
    }


  const  hadledSearch = (filterSearch) =>{
        //  console.log("filter:::", filterSearch);
         if( filterSearch.length > 0  ){
               setState( {  exampleItems: filterSearch,
                             pageOfItems: [],
                           } );
               setTotalFilter( filterSearch.length)
         } else{ 
                setTotalFilter( 0 );
                setState(  { exampleItems: [],
                             pageOfItems : []
                            } );
            }
    }


    const onSelectPage = (event) =>{
         if(event.length > 0){
            setPageSize(Number(event));
         }
    }

    const onSelectMaxPage = (event) =>{
        if(event.length > 0){
            setMaxPages(Number(event));
        }
   }
  
  return (
            <>
                <h2 className='headPagination'>React Paginación y busqueda</h2>
                
                <div className="container">
                      <div className='actionsPage'>   
                         <Search items={dataItems()} handleSudmit = { hadledSearch }/>
                         {totalFilter >= 1 && <p>Total resultados: <strong>{ totalFilter }</strong></p>}
                      </div>
                           <hr />
                        <div className="text-center data">  
                              {totalFilter === 0 && <h4>No hay resultados para esta busqueda</h4>}

                              {state.pageOfItems.map(item =>
                                  <div key={item.id}>{item.name}</div>
                              )}
                        </div>

                      {/* <PruebaPagination items={state.exampleItems} onChangePage={onChangePage} pageSize ={7} maxPages={5} myStyles={ { a:{color:'#BF7417'} } } /> */} 
                      <PruebaPagination items={exampleItems} onChangePage={onChangePage}  pageSize={ pageSize } maxPages={ maxPages }  />
                       
                       <div className='actionsPage'>
                          <Select  options={ [2, 5, 7, 10] } handleSudmit={onSelectPage} label={"PageSize"}   inialValue ={ pageSize }  />
                          <Select  options={ [1, 2, 3, 5] } handleSudmit={onSelectMaxPage} label={"MaxPages"} inialValue= { maxPages } />
                       </div>

                </div>

                    <hr /> 
                    <p className='footPagination'> <small>( usa Bootstrap-3.3.5 ) </small> </p>
            </>
        );  
}
export default PaginationDemo;