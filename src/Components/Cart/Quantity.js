
const Quantity=({quantity,setQuantity})=>{

            
    const addItem = ()=>{
        const newQuantity = quantity + 1;
        setQuantity(newQuantity)
    }

    const removeItem = () =>{
        if (quantity<=1) return;
        const newQuantity = quantity -1;
        setQuantity(newQuantity)
    }

    return(
        <div>
            <button onClick={addItem}> + </button> 
            <span> {quantity} </span>
            <button onClick={removeItem}> - </button>
        </div>
    )
}

export default Quantity;