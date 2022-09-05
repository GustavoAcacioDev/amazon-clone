import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';

import './Header.css';

function Header() {
  const [{basket}, user] = useStateValue();
  return (
    <div className="header">
      <Link to={"/"}>
        <img className="header__logo" src="https://jordantravers.com/wp-content/uploads/2018/10/Amazon-Logo-1024x373.png" alt="Logo da Amazon" />
      </Link>

      <div className="header__search">
        <input className="header_searchInput" type="text" /> <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionOne">Hello Guest</span>
          <span className="header__optionTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionOne">Returns</span>
          <span className="header__optionTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionOne">Your</span>
          <span className="header__optionTwo">Prime</span>
        </div>
        <Link to={"/checkout"}>
          <div className="header__optionBasket" >
            <ShoppingCartIcon />
            <span className="header__optionTwo header__basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header