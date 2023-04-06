import React, { Children } from 'react';
import dataall from '../../Order';
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
               {/* {
                dataall()
               } */}
             <h6 style={{fontSize:"21px"}}>Order Summary</h6>
            <p>Select items:{props.products.length} </p>
            <p>Total Price:<span>$</span>{total} </p>
            <p>Tax:<span>$</span>{tax}</p>
            <p>Total Shipping charge: <span>$</span>{totalshipping}</p>
            <p style={{fontSize:"21px"}}>Grand Total: {grandtotal} </p>
            <div onClick={props.allremove} style={{backgroundColor:"red",width:"100%",textAlign:"center",padding:"2px",marginBottom:"10px"}}>
           Clear All Cart                 <i class="fa fa-trash" aria-hidden="true"></i>
            
</div>
{props.children}
        </div>
    );
};

export default Sidebar_container;