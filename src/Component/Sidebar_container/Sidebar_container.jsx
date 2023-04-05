import React from 'react';
import './Sidebar_container.css'
const Sidebar_container = (props) => {
    let total=0;
    let totalshipping=0;
    let tax;
    let grandtotal;
    console.log(props);
    for(let i of props.products){
    total=total+i.price;
    totalshipping=totalshipping+i.shipping;
    tax=(total*7)/100;
    grandtotal=(total+totalshipping+tax).toFixed(2);
    }
    return (
        <div>
             <h6 style={{fontSize:"21px"}}>Order Summary</h6>
            <p>Select items:{props.products.length} </p>
            <p>Total Price:<span>$</span>{total} </p>
            <p>Tax:<span>$</span>{tax}</p>
            <p>Total Shipping charge: <span>$</span>{totalshipping}</p>
            <p style={{fontSize:"21px"}}>Grand Total: {grandtotal} </p>
            <i class="fa fa-bookmark" aria-hidden="true"></i>
        </div>
    );
};

export default Sidebar_container;