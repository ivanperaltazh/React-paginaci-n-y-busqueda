
export const paginate = (totalItems, currentPage, pageSize, maxPages) => {
    
    if (currentPage === void 0) { currentPage = 1; }
    if (pageSize === void 0) { pageSize = 10; }
    if (maxPages === void 0) { maxPages = 10; }
    // calcular paginas totales
    const totalPages = Math.ceil(totalItems / pageSize);
    // asegúrese de que la página actual no esté fuera de rango
    if (currentPage < 1) {
        currentPage = 1;
    }
    else if (currentPage > totalPages) {
        currentPage = totalPages;
    }
    let startPage, endPage;
    if (totalPages <= maxPages) {
        // páginas totales menos que el máximo, así que muestre todas las páginas
        startPage = 1;
        endPage = totalPages;
    }
    else {
        // páginas totales más que el máximo, así que calcule las páginas de inicio y final
        const maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
        const maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
        if (currentPage <= maxPagesBeforeCurrentPage) {
            // página actual cerca del inicio
            startPage = 1;
            endPage = maxPages;
        }
        else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
            // página actual cerca del final
            startPage = totalPages - maxPages + 1;
            endPage = totalPages;
        }
        else {
            // página actual en algún lugar en el medio
            startPage = currentPage - maxPagesBeforeCurrentPage;
            endPage = currentPage + maxPagesAfterCurrentPage;
        }
    }
    // calcular los índices de artículos iniciales y finales
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    // crear una matriz de páginas para ng-repeat en el control de buscapersonas
    const pages = Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
    // devolver el objeto con todas las propiedades del buscapersonas requeridas por la vista
    return {
        totalItems: totalItems,
        currentPage: currentPage,
        pageSize: pageSize,
        totalPages: totalPages,
        startPage: startPage,
        endPage: endPage,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: pages
    };
}

/*
    pageSize - el número de elementos que se muestran en cada página (defaults to 10)
    maxPages - el número máximo de enlaces de página para mostrar en la navegación de paginación (defaults to 10)
    initialPage - la página inicial para mostrar(defaults to 1)
*/