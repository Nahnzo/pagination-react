import React from 'react';
import cl from './pagination.module.css'


const Pagination = ({photosPerPage,totalPhotos,paginate}) => {

    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalPhotos/photosPerPage);i++){
        pageNumbers.push(i)
    }

    return (
        <div>
            {pageNumbers.map(number => <button key={number} className={cl.pgnButton} onClick={() => paginate(number)}>{number}</button>)}
        </div>
    );
};

export default Pagination;