import { useDispatch, useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../Redux/cartSlice";
import CartItem from "./CartItem";
import { deleteAll } from "../../Redux/cartSlice";


const Cart = () =>{
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const dispatch = useDispatch();

    return(
        <div className="cart">
            <h4>TOTAL PRICE: $ {totalPrice}</h4>
            {cartItems.map(cartItem => <CartItem cartItem = {cartItem}/> )}
            <button className="btn deleteall" onClick={() =>dispatch(deleteAll([]))}>Delete all</button>
        </div>
    )
}

export default Cart;