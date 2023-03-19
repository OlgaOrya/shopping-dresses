import Filter from "./Filter";


const Categories = () =>{

    return(
        <div className="categories">
            {['CASUAL','EVENING','MAXI','MINI','WEDDING','ALL']
            .map(category => <Filter category ={category} />)}
        </div>
    )
}

export default Categories;