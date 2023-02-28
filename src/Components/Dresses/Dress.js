
const Dress = ({dress}) =>{
    return(
            <div className="container">
            <div className="block">
        <img src = {`./${dress.img}.jpg`} alt ="dresses" />
        <h3>{dress.name}</h3>
        <span>Price: $ {dress.price}</span>
        <button> + </button>
        
        </div>
        </div>
    )
}

export default Dress;
