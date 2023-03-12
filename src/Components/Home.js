import { useState } from 'react';
import Dresses from './Dresses/Dresses';
import Categories from './Filter/Categories';


function Home(){
    const [differentCategories,setDifferentCategories] = useState();
    const [differentDresses,setDifferentDresses] = useState();

    return (
    <div className='container'>
    <Categories differentCategories = {differentCategories}/>
    <Dresses differentDresses = {differentDresses} />
    </div>
    )
}

export default Home;