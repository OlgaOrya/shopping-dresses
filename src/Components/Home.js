
import Dresses from './Dresses/Dresses';
import Categories from './Filter/Categories';


function Home(){

    return (
    <div className='container'>
    <Categories differentCategories = {Categories}/>
    <Dresses differentDresses = {Dresses} />
    </div>
    )
}

export default Home;