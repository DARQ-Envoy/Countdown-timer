import PropTypes from 'prop-types'

const Days = ({value, r})=>{
    return(
        <div className="days">
            <div className="display">
            <div className="half" ref={r}>
                <span>
                {`${value}`.length<2?`0${value}`: value}
                </span>
                </div>
            {`${value}`.length<2?`0${value}`: value}
            </div>
            <small>Days</small>
        </div>
    )
}
Days.defaultProps = {
    value:"08"
}
Days.propTypes={
    value: PropTypes.number
}
export default Days