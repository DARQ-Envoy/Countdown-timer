import PropTypes from 'prop-types';
import React from 'react';

const Seconds = ({value, r})=>{
    return(
        <div className="seconds">
            <div className="display">
            <div className="half" ref={r}>
                <span>
                {`${value}`.length<2?`0${value}`: value}
                </span>
                </div>
               {`${value}`.length<2?`0${value}`: value}
            </div>
            <small>Seconds</small>
        </div>
    )
}

Seconds.defaultProps = {
    value:41
}
Seconds.propTypes={
    value: PropTypes.number
}
export default Seconds