import React from 'react';
import './Review.css'
const Review = (props) => {
    console.log(props.indexdata);
    

    const propsdata=props.indexdata;
    
    return (
        <div className='review'>
            <div >
            <img src={propsdata.img} alt="product"style={{height:"80px",width:"50px"}} /></div>
            <div className='itemcontainer'style={{width:"400px"}}>
            <div >
                <p>{propsdata.name
}
<br/>Price:${propsdata.price}<br/>
Charge:${propsdata.shipping}</p>
            </div>
            <div >
                <button onClick={()=>props.removebutton(propsdata)}>
                <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
            </div></div>
        </div>
    );
};

export default Review;