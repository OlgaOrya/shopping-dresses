import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../Redux/cartSlice";
import Quantity from "../Cart/Quantity";

const Dress = ({dress}) =>{
    const [quantity,setQuantity] = useState(1);
    const dispatch = useDispatch();

    return(
            <div className="container">
            <div className="block">
        <img className="pictureDresses" src = {`./${dress.img}.jpg`} alt ="dresses" />
        <h3 className="itemCart">{dress.name}</h3>
        <span className="itemCart">Price: $ {dress.price}</span>
        <Quantity quantity ={quantity} setQuantity ={setQuantity} />
        <button className="btn addItem" onClick={() => {dispatch (addItemToCart({dress,quantity}))}}>ADD TO CART</button>
        </div>
        </div>
    )
}

export default Dress;
