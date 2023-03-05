import { useDispatch } from "react-redux";
import dataDresses from "../../data/dataDresses";
import { removeItemToCart } from "../../Redux/cartSlice";

const CartItem= ({cartItem}) =>{
    const dresses = dataDresses.find(item =>item.id===cartItem.dressId);
    const dispatch = useDispatch();

    return(
        <div>
        <h3>{dresses.name}
        <span onClick={() =>dispatch(removeItemToCart({cartItemId:cartItem.id}))}>
        <img className="cartDelete" src ="https://img.icons8.com/color/1x/delete-forever.png" alt ="cartdelete"/> 
        </span></h3>
        <p>{cartItem.quantity} dress(es)</p>
        <p>Price:$ {dresses.price*cartItem.quantity}</p>
        </div>
    )
}

export default CartItem;