import Dress from './Dress';
import dataDresses from '../../data/dataDresses';
import { useSelector } from 'react-redux';
import { getSelectedCategory } from '../../Redux/dressesSlice';

const Dresses = () =>{
    const selectedCategory = useSelector(getSelectedCategory);
    return(
        <div>
        {dataDresses
        .filter(dress =>{
            if (selectedCategory==='ALL') return true;
        return selectedCategory===dress.category;
        })
        .map(dress => <Dress dress = {dress} />)}
        </div>
    )
}

export default Dresses;