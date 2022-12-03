import { useState, useEffect} from "react";
const Head = ({text, classN, setTime, findSum, reset}) =>{
    useEffect(()=>{
        if(setTime){
findSum(Object.values(setTime)) !== 0 && reset(true);
            }    
}, [setTime])
    return(
            <h5 className={classN}>{text}</h5>
    )
};
export default Head