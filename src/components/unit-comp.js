
const Unit = ({conc, text,cln})=>{
return(
    <li className={cln}>
        {text}
    </li>
)
}
;
Unit.defaultProps ={
    conc: ""
}
export default Unit;