import { useContext } from 'react';
import classes from "./HeaderCartButton.module.css";
import CartIcon  from "../Cart/CartIcon";  
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props)=>{
    const cartctx = useContext(CartContext)

    const numberOfItem = cartctx.items.reduce((currNum, item)=> currNum + item.amount, 0)

    
    return <button className={classes.button} onClick={props.onShowCart}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfItem}</span>
    </button>
}

export default HeaderCartButton
