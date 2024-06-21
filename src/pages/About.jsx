import { useState } from 'react';
import useFetch from '../hooks/UseFech';
import { NavLink } from 'react-router-dom';
function About() {
    const [malumodQoshish,setMalumodQoshish]=useState(30)
    const koproqMalumod=()=>{
     if(malumodQoshish<=170){
        setMalumodQoshish(malumodQoshish+20)
        console.log(malumodQoshish)
    }else{
    const button=document.querySelector('.button1')
    button.style=`
    display: none`
    console.log(data)
    }
}
    const { data, isPending, error } = useFetch(`https://dummyjson.com/products?limit=${malumodQoshish}`);
    console.log(data)
    return(<div className='div1'>
          {isPending && <span className="loading loading-spinner loading-lg"></span>}
          {error && <div>{error}</div>}
          {data&& data.products.map((product)=>{
          return(
              <NavLink className='div2' key={product.id} to={`/toliqmalumod/${product.id}`}>
          <div className=" w-96 bg-base-100 drop-shadow-md hover:drop-shadow-2xl duration-75">
          <figure className='mx-11'><img src={product.thumbnail} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            <p>{product.description}</p>
            <div className="card-actions justify-end flex text-centor" style={{display :'flex'}}>
              <p className='text-teal-600 font-bold text-start'>${product.price}</p>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
         </NavLink>
        )
        })}
        <button onClick={()=>{koproqMalumod()}} className='button1 w-full mt-11 h-10 bg-base-100  drop-shadow-md hover:drop-shadow-2xl duration-75'>Yanada koproq</button>
        </div>
    )
}

export default About