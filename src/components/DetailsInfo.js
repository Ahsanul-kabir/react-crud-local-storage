import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// getting the values of local storage
const getDatafromLS = () => {
    const data = localStorage.getItem('items');
    if (data) {
        return JSON.parse(data);
    }
    else {
        return []
    }
}


const DetailsInfo = () => {
    // main array of objects state || items state || items array of objects
    const [items, setItems] = useState(getDatafromLS());

    const { id } = useParams();

    const result = items.filter(item => item.id === id);
    console.log(result);

    return (
        <div className='data-view'>
            <p>Id: {id}</p>
            <p>Name: {result[0].name}</p>
            <p>Phone Number: {result[0].number}</p>
        </div>
    );
};

export default DetailsInfo;