import React, { useState } from 'react'
import './App.css'
const App = () => {
  const [count,setCount] = useState(0);
  const OnChnageCount = (val)=>{
    setCount((prev)=>{
      if(val ===2 || val === 0.5){
        return prev*val;
      }else if(val ===0){
        return 0;
      }else if(val ===1 || val ===-1){
        return prev+val;
      }else if(val ==='square'){
        return prev*prev;
      }
    })
  }
  return (
    <div>
      <div className="container"></div>
      
      <div className=" text-center  ">
        <div className='row m-3 text-center '>
           
      <h1 className='col-3 box offset-4 '>{count}</h1>
        </div>
     <div className="row gap-3">
      <div className="row col-6 offset-4 ">
        <div className="col-3 box">
          <button className=" btn btn-danger" onClick={()=>OnChnageCount(-1)}>Sub</button>
        </div>
        <div className="col-3 box">
        <button className=" btn btn-danger" onClick={()=>OnChnageCount(1)}>ADD</button>
        </div>
      </div>
      <div className="row col-6 offset-4">
      <div className="col-3 box">
          <button className=" btn btn-danger" onClick={()=>OnChnageCount(0.5)}>Make it half</button>
        </div>
        <div className="col-3 box">
        <button className=" btn btn-danger" onClick={()=>OnChnageCount(2)}> Make it Double</button>
        </div>
      </div>
      <div className="row col-6 offset-4">
      <div className="col-3 box">
          <button className=" btn btn-danger" onClick={()=>OnChnageCount('square')}>Square</button>
        </div>
        <div className="col-3 box">
        <button className=" btn btn-danger" onClick={()=>OnChnageCount(0)}>A/C</button>
        </div>
      </div>
     </div>
      </div>
      </div>
  )
}

export default App
