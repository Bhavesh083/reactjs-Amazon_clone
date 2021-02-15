import React from 'react'
import { useSelector } from 'react-redux'
import Checkoutitem from './Checkoutitem'
import './Checkout.css'

function Checkout() {

    const cart = useSelector(state => state.items)

    const cost = cart.map(item => item.cost)
    console.log(cost)
    const curcost = cost.reduce((prev,cur) => prev+cur,0)
    console.log(curcost)

    return (
        <div className='checkout'>
            {cart.length !== 0 ? (
                <div className='co-cart'>
                   <div className='sec-devider'> 
                        <div className='cart-head'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQjjJ5mvRgdFEAS99kGfBxcDu9dgM-QuQzQw&usqp=CAU'/>
                            <h2>Your Cart</h2>
                        </div>
                        <div className='payment'>
                            <p>Subtotal ({cart.length} items) : {curcost} $ </p>
                            <button>Proceed to Checkout</button>
                        </div>
                   </div> 
                    <div className='ço-cart-body'>
                         {cart.map(item => (
                            <Checkoutitem
                            id={item.id}
                            title={item.title}
                            cost={item.cost}
                            rating={item.rating}
                            img={item.img} />
                         )) }
                    </div>
                </div>
            ) : (
            <div className='cono-cart'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeNRWd8P71qGU8olEgBFI7Tb2XDV-mUk8JJg&usqp=CAU' />
                <h1>Your Cart is empty !</h1>
            </div>
                )}
        </div>
    )
}

export default Checkout
