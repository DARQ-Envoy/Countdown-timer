import { useEffect,useState, useCallback} from "react";
import React from "react";
import Unit from "./unit-comp";
import Head from "./header"




const Setting=({name, setName, setTime})=>{
    let day = React.createRef();
    let hour = React.createRef();
    let minutes= React.createRef();
    let seconds = React.createRef();
    const [dayUnit, setDayUnit] = useState([]);
    const [hourUnit, setHourUnit] = useState([]);
    const [minutesUnit, setMinuteUnit] = useState([]);
    const [secondsUnit, setSecondsUnit] = useState([]);
    const [condition, setCondition] = useState(false);
    const [timing, setTiming] = useState({})
    const [clas, classVal] = useState('');
    const [reverClas, setReverClass] = useState('m-space');
    const [value, setValue] = useState(0);
    const [result, setResult] = useState([])
    const [reverse, setReverse] = useState([])
    const [scrollBy, setScroll]= useState(0);
    let allSetValues = [ setDayUnit, setHourUnit, setMinuteUnit, setSecondsUnit];
    const [elements, setElements] = useState()
    let check;
    let checkelements;
    const [run, setRun] = useState(false)
    


useEffect(()=>{
checkelements= setTimeout(()=>{
    if(value === 60){
        let set = true;
        elements.forEach((ele)=>{
            let items = Array.from(ele.querySelectorAll("li")).filter((li)=>{return li.classList.contains("picked")});
             if(items.length > 0 ){
                set = false
            };
        })
    set&&elements.forEach((ele,index)=>{
let height = parseFloat(getComputedStyle(ele).height.replace("px","") );
 setScroll(()=>{
   let center= (ele.scrollHeight-height)/2;
        ele.scrollTop=Math.floor(center);
        return center
    })              })

        }
}, 200)


return ()=>{
   clearTimeout(checkelements)
}

}, [value, name])


useEffect(()=>{
    let stopTime = [10, 24, 59, 59];
    allSetValues.map((setting,index)=>{
    let info = [...reverse.slice(1, stopTime[index]+1),...result.slice(0, stopTime[index]+1)];
    setting(()=>info);
    
                });
}, [reverse, result])

useEffect(()=>{
let timing;
setElements((eles)=>{
return [day.current,hour.current,minutes.current, seconds.current]
})
    if(value === 60){   
check = setTimeout(
    ()=>{
        if(Math.ceil(elements[elements.length-1].scrollTop) === Math.ceil(scrollBy)){
            setCondition(()=>true);
        }
    }, 1000
)
setRun(true);
    }


      
            if(value < 60){

 timing = setInterval(()=>{
!clas? classVal('m-space'):classVal('');
setResult((res)=> [...res, makeElement(value, value, clas)]);
reverClas ? setReverClass(""): setReverClass("m-space");   
setReverse((res)=> [...res, makeElement(value, -60+value, reverClas)])
setValue((value)=> value+1);
}
, 300);
            }


            return  ()=>{
                    clearInterval(timing);
                    clearTimeout(check);
            }

            }, [value, scrollBy, condition]);


useEffect(()=>{
    let time = {}
    let naming = ["days", "hours", "minutes", "seconds"] 
    if(elements){
        elements.forEach((ele, elindex)=>{
let allLi = ele.querySelectorAll("li");
allLi.forEach((li, indice)=>{  

li.onclick=(e)=>{
let totalHeight = 0;
allLi.forEach((li, index)=>{
    li.classList.remove("picked");
    if(index < indice - 1){
        totalHeight += parseFloat(getComputedStyle(li).height.replace("px", "")) + parseFloat(getComputedStyle(li).marginTop.replace("px", ""))+ parseFloat(getComputedStyle(li).marginBottom.replace("px", ""))  
    }
    if(index === indice -1){
        totalHeight+= parseFloat(getComputedStyle(li).marginTop.replace("px", ""))
    }
});
e.target.classList.add("picked");
let scroll = totalHeight;
ele.scrollTop = scroll;

allLi.forEach((li)=>{
    if(li.classList.contains("picked")){
        time[naming[elindex]]=parseFloat(li.textContent);
        setTiming((prev)=>{return { ...prev, ...time} })
        } 
})
}


                    })
                    })

    }
}
,[elements, name])


const makeElement = (val,key, cName)=>{
    if(val === 59){
        cName = "b-space";
    }  

    return   <Unit text={val} key={key} cln={cName}/>;
    };

const removeSet = ()=>{
    elements.forEach((ele)=>{
        let list = ele.querySelectorAll("li");
        list.forEach((li)=>{
            li.classList.remove("picked")
        });
    });
}

    return(
        <div className={name}>
    <div className="set-values">
        <div className="cont d-cont">
        <Head classN={'u-head'} text={"Day"}/>
<ul className="day-line smooth" ref={day}>{dayUnit}
        </ul>
        </div>
      <div className="cont h-cont">
      <Head classN={'u-head'} text={"Hour"}/>
      <ul className="hour-line smooth" ref={hour}>
            {hourUnit}
        </ul>
      </div>
      <div className="cont m-cont">
      <Head classN={'u-head'} text={"Minutes"}/>
      <ul className="minutes-line smooth" ref={minutes}>
            {minutesUnit}
        </ul>
      </div>
      <div className="cont s-cont">
      <Head classN={'u-head'} text={"Second"}/>
      <ul className="second-line smooth" ref={seconds}
      >  {secondsUnit}
        </ul>
      </div>
    </div>
    <div className="action">
        <button id="done"onClick={()=>{
        setTime((prev)=>{
            return {...prev, ...timing}
        })
            removeSet()
            setName("setting hide")
        }}>Set</button>
        <button id="cancel" onClick={()=>{
            removeSet()
            setName("setting hide")
        }}>Cancel</button>
    </div>
      
        </div>


    )
}



export default Setting



