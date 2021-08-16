import Star from "./Star"

const Starrating = ({totalStars = 5, selectedStars = 0, onRate = f=>f}) =>{
    const createArray = length => [...Array(length)]
    return createArray(totalStars).map((n,i)=>
        <Star key={i} selected = {selectedStars > i} onSelect={()=>onRate(i + 1)}/>
    )
}

export default Starrating
