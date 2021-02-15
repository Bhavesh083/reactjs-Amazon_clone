import { Button } from '@material-ui/core'
import { Star } from '@material-ui/icons'
import React from 'react'
import { useDispatch } from 'react-redux';
import './Product.css';
import { cartAdd } from './actions/cartAction'

function Product({id,title,rating,cost,img}) {

    const dispatch = useDispatch();

    const cartAdder = () =>{
        dispatch(cartAdd(id,title,rating,cost,img));
    }

    return (
        <div className='product'>
            <div className='pr-top'>
            <p className='product-title'>{title}</p>
                <div className='product-rating'>
                    { Array(rating) 
                       .fill()
                       .map((_) =>(
                                 <p><Star className='p-r-p' /></p>))
                    }
                </div>
            </div>
            <div className='pr-cen'>
                <img className='product-image' src={img} />
            </div>
            <div className='product-down'>
                <p className='product-cost'>{cost}$</p>
                <button className='product-button' onClick={()=>cartAdder()}>Add to cart</button>
            </div>
        </div>
    )
}

export default Product
