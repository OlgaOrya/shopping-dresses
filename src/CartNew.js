import Cart from "./Components/Cart/Cart";

const CartNew = () =>{
    return(
    <div>
        <img onClick={(newcart)=><Cart newcart={newcart} />} className='iconCart' src ="https://img.icons8.com/carbon-copy/256/shopping-cart.png" alt = "iconCart" />
    </div>
    )
}

export default CartNew;

