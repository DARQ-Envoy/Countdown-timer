import PropTypes from 'prop-types'

const Image = ({src, alt, nme, styling})=>{
    return(
        <img src={src} alt={alt} className={nme} style={styling}/>
    )
};
Image.defaultProps = {
    nme:"social",
    styling:{},
    src:"",
    alt:"Social Media Icon"
}
Image.propTypes={
    nme:PropTypes.string,
    styling:PropTypes.object,
    src:PropTypes.string,
    alt:PropTypes.string
}
export default Image
