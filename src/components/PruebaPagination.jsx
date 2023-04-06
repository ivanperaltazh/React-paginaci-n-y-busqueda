import PropTypes from 'prop-types';
import { paginate } from '../utils/paginate';
import { useEffect, useState } from 'react';

const initialStatePage = { pager: {} };

 
const PruebaPagination = ({ items, pageSize, maxPages, initialPage, labels, onChangePage, disableDefaultStyles = false, myStyles }) => {

 const [statePage, setStatePage] = useState(initialStatePage);
 const { pager } = statePage;

    useEffect(() => {
        setPage( 1 )
    }, [items, pageSize, maxPages])


    useEffect(() => {
        // establecer página si la matriz de elementos no está vacía //componentWillMount()
        if (items && items.length > 0) {
            setPage(initialPage);
        }
    }, [])


const setPage = ( page ) => {
     let  paging = paginate(items.length, page, pageSize, maxPages);
     setStatePage({ pager: paging });
     // obtener una nueva  matriz de elementos
     const pageOfItems = items.slice(paging.startIndex, paging.endIndex + 1);
     onChangePage(pageOfItems);
 }

 let styles = {};

        if (!disableDefaultStyles) {
            styles = {
                ul: {
                    margin: 0,
                    padding: 0,
                    display: 'inline-block'
                },
                li: {
                    listStyle: 'none',
                    display: 'inline',
                    textAlign: 'center'
                },
                a: {
                    cursor: 'pointer',
                    padding: '6px 12px',
                    display: 'block',
                    float: 'left',
                }
            }
        }

        // combinar estilos personalizados con estilos predeterminados
        if ( myStyles ) {
              styles = {
                ul: { ...styles.ul, ...myStyles.ul },
                li: { ...styles.li, ...myStyles.li },
                 a: { ...styles.a,  ...myStyles.a  }
            };
        }

 return (
     <>
     { !pager.pages || pager.pages.length < 1  ?  null  :
         (
            <ul className="pagination" style={styles.ul}>
            <li className={`page-item first ${pager.currentPage === 1 ? 'disabled' : ''}`} style={styles.li}>
                <a className="page-link" onClick={() => setPage(1)} style={styles.a}>{labels.first}</a>
            </li>
            <li className={`page-item previous ${pager.currentPage === 1 ? 'disabled' : ''}`} style={styles.li}>
                <a className="page-link" onClick={() => setPage(pager.currentPage - 1)} style={styles.a}>{labels.previous}</a>
            </li>

            {pager.pages.map((page, index) =>
                <li key={index} className={`page-item page-number ${pager.currentPage === page ? 'active' : ''}`} style={styles.li}>
                    <a className="page-link" onClick={() => setPage(page)} style={styles.a}>{page}</a>
                </li>
            )}

            <li className={`page-item next ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`} style={styles.li}>
                <a className="page-link" onClick={() => setPage(pager.currentPage + 1)} style={styles.a}>{labels.next}</a>
            </li>
            <li className={`page-item last ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`} style={styles.li}>
                <a className="page-link" onClick={() => setPage(pager.totalPages)} style={styles.a}>{labels.last}</a>
            </li>
        </ul>
         )
            
     }
      </>
  )

}

const propTypes = {
 items: PropTypes.array.isRequired,
 onChangePage: PropTypes.func.isRequired,
 initialPage: PropTypes.number,
 pageSize: PropTypes.number,
 maxPages: PropTypes.number,
 labels: PropTypes.object,
 disableDefaultStyles: PropTypes.bool
}

const defaultProps = {
 initialPage: 1,
 pageSize: 10,
 maxPages: 10,
 labels: {
     first: 'First',
     last: 'Last',
     previous: 'Previous',
     next: 'Next'
 }
}

PruebaPagination.propTypes = propTypes;
PruebaPagination.defaultProps = defaultProps;
export default PruebaPagination;