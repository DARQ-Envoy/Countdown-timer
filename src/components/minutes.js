import PropTypes from 'prop-types'

const Minutes = ({value, r})=>{
    return(
        <div className="minutes">
            <div className="display">
            <div className="half" ref={r}>
                <span>
                {`${value}`.length<2?`0${value}`: value}
                </span>
                </div>


            {`${value}`.length<2?`0${value}`: value}
            </div>
            <small>Minutes</small>
        </div>
    )
}
Minutes.defaultProps = {
    value:55
}
Minutes.propTypes={
    value: PropTypes.number
}
export default Minutes