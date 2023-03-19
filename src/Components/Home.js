
import Dresses from './Dresses/Dresses';
import Categories from './Filter/Categories';


function Home(){

    return (
<div>
    <div className='header'>
        <h1>What's your dress for today?</h1>
    </div>
    <div className='containerAll'>
    <Categories differentCategories = {Categories}/>
    <Dresses differentDresses = {Dresses} />
    </div>
</div>
    )
}

export default Home;