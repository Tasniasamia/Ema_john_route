import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../../utilities/fakedb';
import Review from '../Review/Review';
import Sidebar_container from '../Sidebar_container/Sidebar_container';
import './Order.css';
const Order = () => {
    let data=useLoaderData();
  const [cart,setCart]=useState(data)
   
    
    function removebutton(dataproduct){
        
        let datafilter=cart.filter(index=>index.id!=dataproduct.id);
   setCart(datafilter);
   removeFromDb(dataproduct.id);

    }
    function allremove(){
        setCart([]);
    deleteShoppingCart();
        
    }
    return (
        <div className='order_container'>
        <div style={{width:"30%"}}>
         {
            cart.map(index=><Review indexdata={index} removebutton={removebutton}></Review>)
         }
        </div>
        <div className='sidebar_container'>

            <Sidebar_container products={cart} allremove={allremove}>

            <Link to="/Proceed"   style={{backgroundColor:"orange",width:"100%",textAlign:"center",padding:"2px",color:"white"}}>
                  Proceed CheckOut <i class="fa-solid fa-arrow-right"></i>
                  </Link> 
            </Sidebar_container>

        </div>
        </div>
    );
};

export default Order;