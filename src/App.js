import React, { useState,useEffect } from 'react';
import './App.css';
import axios from 'axios'
import { async } from 'q';


function App() {
  const [count , setCount] = useState(0)
  const [data , setData] = useState([])
  const [brand , setBrand] = useState('')
  const [price , setPrice] = useState(0)
  return (  
  <div>
    <nav>
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo center">react-hook-demo</a>
      </div>
    </nav>
    <div className="middle">
      <h1>{count}</h1>
      <a className="waves-effect waves-light btn" onClick={()=>{setCount(count+1)}}>Add count</a>
      <div style={{marginTop:'10px'}}>
        <div style={{marginLeft:'40%',marginRight:'40%'}}>
          <input name='brand' type="text" onChange={(e)=>{setBrand(e.target.value)}}/>
          <input name='price' type="number"  onChange={(e)=>{setPrice(e.target.value)}}/>
        </div>
        <a className="waves-effect waves-light btn" onClick={()=>{setData([...data,{id:data.length,brand:brand,price:price}])}} >Add item</a>
        
        { data.map( item => (
          <h3 key={item.id}>{item.brand} {item.price}</h3>
        ))}
        
      </div>
    </div>
  </div>
  );
}

export default App;
