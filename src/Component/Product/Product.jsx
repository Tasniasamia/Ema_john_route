import React, { useEffect, useState } from 'react';
import Shop_cart from '../Shop_cart/Shop_cart';
import Sidebar_container from '../Sidebar_container/Sidebar_container';
import './Product.css'
import { addToDb,getShoppingCart } from '../../../utilities/fakedb';
import { Link } from 'react-router-dom';
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
let setnewarray=[];
    useEffect(()=>{
     let   localstogevalue=getShoppingCart();
        for(let id in localstogevalue){
            let selectproduct=step.find(index=>index.id==id);
            if(selectproduct){
                selectproduct.quantity=localstogevalue[id];
                setnewarray.push(selectproduct);
                console.log(selectproduct);
            }
           
        }
        setProduct(setnewarray);
    },[step])
    return (
        <div className='Product_container'>
            <div className='cart_container'>
           {
            step.map(index=><Shop_cart {...index} key={index.id} catchfunction={handler}></Shop_cart>)
           }
            </div>
            <div className='sidebar_container'>
           <Sidebar_container products={products}>
           <Link to="/Order"  style={{backgroundColor:"orange",width:"100%",textAlign:"center",padding:"2px",color:"white"}}>
                   Review Order <i class="fa-solid fa-arrow-right"></i>
                </Link>
           </Sidebar_container>

            </div>
            
        </div>
    );
};

export default Product;