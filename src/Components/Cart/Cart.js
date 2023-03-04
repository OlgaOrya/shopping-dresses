import { useSelector } from "react-redux";
import { getCartItems } from "../../Redux/cartSlice";
import CartItem from "./CartItem";


const Cart = () =>{
    const cartItems = useSelector(getCartItems)

    return(
        <div>
            {cartItems.map(cartItem => <CartItem cartItem = {cartItem}/>  )}
        </div>
    )
}

export default Cart;