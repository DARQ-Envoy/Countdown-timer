import PropTypes from 'prop-types'

const Hours = ({value, r})=>{
    return(
        <div className="hours">
            <div className="display">
        <div className="half" ref={r}>
            <span>
                {`${value}`.length<2?`0${value}`: value}
            </span>
        </div>
            {`${value}`.length<2?`0${value}`: value}
            </div>
            <small>Hours</small>
        </div>
    )
}
Hours.defaultProps = {
    value:23
}
Hours.propTypes={
    value: PropTypes.number
}
export default Hours