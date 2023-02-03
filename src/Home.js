import React from 'react'
import Product from './Product'
import './Home.css'
export default function Home() {
  return (

   <>
   <div className="home">
    <div className="home__container">
        <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="icon" className="home__image"/>
    </div>

    <div className="home__row">
        <Product/>
        <Product/>
    </div>
  
   </div>
   </>
  )
}
