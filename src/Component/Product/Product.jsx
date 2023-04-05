import React, { useEffect, useState } from 'react';
import Shop_cart from '../Shop_cart/Shop_cart';
import Sidebar_container from '../Sidebar_container/Sidebar_container';
import './Product.css'
import { addToDb,getShoppingCart } from '../../../utilities/fakedb';
const Product = () => {
    const [step,setStep]=useState([])
    useEffect(()=>{
fetch('products.json')
.then(res=>res.json())
.then(data=>setStep(data))
    },[])

const [products,setProduct]=useState([])

    const handler=(product)=>{
       let localstoragevalue= addToDb(product.id);
    //  console.log(localstoragevalue);
    const newproduct=[...products,product]
        setProduct(newproduct);
    }
    let localstogevalue;
    useEffect(()=>{
        localstogevalue=getShoppingCart();
    },[])
    return (
        <div className='Product_container'>
            <div className='cart_container'>
           {
            step.map(index=><Shop_cart {...index} key={index.id} catchfunction={handler}></Shop_cart>)
           }
            </div>
            <div className='sidebar_container'>
           <Sidebar_container products={products}></Sidebar_container>

            </div>
            
        </div>
    );
};

export default Product;