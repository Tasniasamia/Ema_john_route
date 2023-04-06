import { getShoppingCart } from "../utilities/fakedb";

let savecart=[];
const dataall=async()=>{
    const data=await fetch("products.json");
    const datas=await data.json();
   console.log(datas);
    let getShoppingCartdata=getShoppingCart();
    for(let id in getShoppingCartdata){
      let filterData=datas.find(index=>index.id==id);
      if(filterData){
        filterData.quantity=getShoppingCartdata[id];
        savecart.push(filterData);
   
  console.log(savecart);
      }
      
    }
    return savecart; 
}
// dataall();
// dataall();
// let savecart=[];
// useEffect(()=>{
   
// },[data]);
export default dataall;