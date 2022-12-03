import PropTypes from 'prop-types'

const setTime=({text,setcl})=>{
    return(
<div>
    <button className="set" onClick={()=>{
      setcl((prev)=>prev==="setting"?"setting hide":"setting")
      }}>{text}</button>
</div>
    )
}
setTime.defaultProps={
    text: "Reset"
}
setTime.propTypes={
    text: PropTypes.string
}
export default setTime