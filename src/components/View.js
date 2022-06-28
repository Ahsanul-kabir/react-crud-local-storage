import React from 'react';
import { Link } from 'react-router-dom';

const View = ({ singleItem, deleteItem, editItem }) => {
    return (

        <div className="data-view">
            <Link to={`contact/${singleItem.id}`}>
                <p>Name: {singleItem.name}</p>
                <p>Phone Number: {singleItem.number}</p>
            </Link>
            <button onClick={() => deleteItem(singleItem.id)} className="deleteItem">Delete</button>

            <button onClick={() => editItem(singleItem.id)} className="editItem">Edit</button>
        </div>


        // <div class="table">
        //     <div class="table-row">
        //         <div class="table-col">Name</div>
        //         <div class="table-col">Phone Number</div>
        //         <div class="table-col">Delete</div>
        //         <div class="table-col">Edit</div>
        //     </div>
        //     <div class="table-row">
        //         <div class="table-col">{singleItem.name}</div>
        //         <div class="table-col">{singleItem.number}</div>
        //         <div class="table-col">
        //             <button onClick={() => deleteItem(singleItem.id)} className="">Delete</button>
        //         </div>
        //         <div class="table-col">
        //             <button onClick={() => editItem(singleItem.id)} className="editItem">Edit</button>
        //         </div>
        //     </div>
        // </div>
    );
};

export default View;