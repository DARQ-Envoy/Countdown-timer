import Image from './image'
import In from '../Images/Linkedin.svg'
import git from '../Images/github-icon.svg'
import Link from './link'
const footer =()=>{
    let st ={
        fill: "gray"
    }
    return(
        <footer>
            <Link url={"https://linkedin.com/in/timothy-nwokeji-a0a284228"} content={<Image src={In} styling={st}/>}/>
        <Link url="https://github.com/DARQ-Envoy/" content={<Image src={git}/>}/>
        </footer>
    )
}
export default footer;