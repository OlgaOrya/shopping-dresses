import Filter from "./Filter";


const Categories = ({differentCategories}) =>{

    return(
        <div className="categories">
            {['CASUAL DRESSES','EVENING DRESSES','MAXI DRESSES','MINI DRESSES','WEDDING DRESSES','ALL']
            .map(category => <Filter category ={category} />)}
        </div>
    )
}

export default Categories;