import React from 'react';
import './Shop_cart.css'
const Shop_cart = (props) => {
    console.log(props);
    const handlerfunction=props.catchfunction;
    const {img,name,price,seller,ratings}=props;
    let srces="https://picsum.photos/seed/picsum/200/300";
    return (
        
        <div className="product">
            {/* <img src="https://picsum.photos/seed/picsum/200/300"/> */}
            <div className='imgclass'>
           <img src={img?img:srces} style={{height:"296px",width:"296px"}} alt="product" /> </div>
           <div style={{padding:"10px",marginBottom:"30px"}}>
           <h6 style={{fontSize:"21px",marginBottom:"0px",marginTop:"0px"}}>{name}</h6>
           <p>Price: {price}</p>
           <p>Manufacture: {seller}</p>
           <p>Ratings: {ratings}</p></div>
          <div className='cartbtn'>
           <button onClick={()=>handlerfunction(props)} className='cartbtn' style={{backgroundColor:"antiquewhite"}}>Add to cart<i class="fa-solid fa-cart-shopping"></i></button>
           </div></div>
       
    );
};

export default Shop_cart;