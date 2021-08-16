import Starrating from "./Starrating";
import {FaTrash} from "react-icons/fa"

const Color = ({id,title,color,rating, onRemove = f=>f, onRate=f=>f})=>
<div>
    <h1>{title}</h1>
    <button
    onClick={onRemove}>
        <FaTrash></FaTrash>
    </button>
    <div style={{padding:"50px", backgroundColor:color}}></div>
    <Starrating selectedStars={rating} onRate={(rating)=>onRate(id,rating)}/>
</div>

export default Color
