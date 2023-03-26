import { useSelector, useDispatch } from "react-redux";
import { fileredCategory, getSelectedCategory } from "../../Redux/dressesSlice";

const Filter = ({category}) =>{
    const dispatch = useDispatch();
    const selectedCategory = useSelector(getSelectedCategory);

    return(
        <div>
        <p onClick={()=>{dispatch(fileredCategory(category))}}
        className={selectedCategory === category?'categorySelectedButton': 'categoryButton'}>{category}</p>
        </div>
    )
}

export default Filter;