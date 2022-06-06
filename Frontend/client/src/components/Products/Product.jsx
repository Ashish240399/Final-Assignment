import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../Redux/actions/appendAction';
import { pageChange } from '../Redux/actions/pageAction';

function Product() {
    const dispatch=useDispatch();
    const productList=useSelector((store)=>store.products.products)
    const [page,setPage]=useState(1);
    //console.log(productList)
    useEffect(()=>{
        getProducts()
    },[page]);
    async function getProducts(){
        const data=await fetch(`https://final-app-fullstack.herokuapp.com/products?page=${page}`);
        const res=await data.json();
        dispatch(getData(res))
    }
  return (
    <div>
        {productList.map((el)=>(
            <div>
                <img src={el.images[0]}/>
            </div>
        ))}
        <button onClick={()=>{
            dispatch(pageChange(-1))
            setPage(page-1);
        }}>Prev</button>
        <button onClick={()=>{
            dispatch(pageChange(+1))
            setPage(page+1);
        }}>Next</button>
    </div>
  )
}

export default Product