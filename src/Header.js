import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useSelector } from 'react-redux';
import { initialState } from './reducers/reducer';

function Header() {

  const cart = useSelector(state => state.items)


  return (
    <div className='header'>
      <Link className='header-logo-link' to='/'>
          <img src='https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/amazon-512.png' className='header-logo' />
      </Link>
      <div className='header-searchbar'>
        <input className='h-sb-inp' placeholder='search' />
        <SearchIcon className='h-sb-icon' />
      </div>
      <div className='header-navs'>
          <Link className='header-navs-link one' to='login'>
              <span className='h-n-l-onespan'>Hello Customer</span>
              <span className='h-n-l-twospan'>Sign in</span>
          </Link>
          <Link className='header-navs-link two'>
              <span className='h-n-l-onespan'>Returns</span>
              <span className='h-n-l-twospan'>& orders</span>
          </Link>
          <Link className='header-navs-link three'>
              <span className='h-n-l-onespan'>Your</span>
              <span className='h-n-l-twospan'>Prime</span>
          </Link>
          <Link className='header-navs-link-last' to='checkout'>
              <ShoppingCartIcon className='h-n-l-l-icon' />
              <span className='h-n-l-last-span'>{cart.length}</span>
          </Link>
      </div>
    </div>
  )
}

export default Header;