import React from 'react';
import cl from './photo.module.css'

const Photos = ({photos,loading}) => {

    if(loading)
    {return <h2>Loading...</h2>}

    return (
        <ul className="list-group mb-2">
            {
                photos.map((photo,index) => <div className={cl.photo} style={{backgroundImage: `url(${photo.url})`}} key={index}>{photo.id}</div> )
            }
        </ul>
    );
};

export default Photos;