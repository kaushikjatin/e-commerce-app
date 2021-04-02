import React from 'react';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils.js';
import {connect} from 'react-redux';
import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors'

const Header=({currentUser,hidden})=>{
    return(
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>Shop</Link>
                <Link className='option' to='/shop'>Contact</Link>
                {currentUser ?(
                        <div className='option' onClick={()=>auth.signOut()}>Sign Out</div>
                ):(<Link className='option' to='/signin'>Sign In</Link>)
                }
                <CartIcon></CartIcon>
            </div>
            {
                hidden? null : (<CartDropdown></CartDropdown>)
            }
        </div>
    )
}


const mapStateToProps= (state)=>({   // mapStateToProps function will br called with argument as the state of the store...which is a big giant object
        currentUser:selectCurrentUser(state),
        hidden:selectCartHidden(state)
    }) // this function will return an object which will be given to our Header component as props automatically.

export default connect(mapStateToProps)(Header);