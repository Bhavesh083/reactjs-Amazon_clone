import { Star } from '@material-ui/icons';
import React from 'react'
import { useDispatch } from 'react-redux';
import  "./Checkoutitem.css";
import { cartDel } from './actions/cartAction'

function Checkoutitem({id,title,rating,cost,img}) {

    const dispatch = useDispatch();

   const delCart = () =>{
        dispatch(cartDel(id));
   }

    return (
        <div className='Checkoutitem-box'>
           <div> 
                <img src={img} />
           </div>
           <div className='cout-bdy'>
                <p className='cout-bdy-p'>{title}</p>
                <div className='cout-bdy-rating'>
                    { Array(rating) 
                       .fill()
                       .map((_) =>(
                                 <p><Star className='stars-ck' /></p>))
                    }
                </div>
                <div className='fnal-ck'>
                    <p className='f-ck-p'>{cost}$</p>
                    <button className='f-ck-but' onClick={()=>delCart()} >Remove item</button>
                </div>
            </div>
        </div>
    )
}

export default Checkoutitem
