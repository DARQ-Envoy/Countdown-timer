import Seconds from './seconds'
import Minutes from './minutes'
import Hours from './hours'
import Days from './days'
import React from 'react'

class Time extends React.Component{
constructor(props){
        super(props);
        this.state={
        timeValue:{
            seconds:0,
            minutes: 0,
            hours:0,
            days:0
        },
        started : true,
    }  
        this.timing = this.timing.bind(this);
        this.initialminute = this.state.timeValue.minutes
        this.secondsRef = React.createRef()
        this.minutesRef = React.createRef()
        this.hoursRef = React.createRef()
        this.daysRef = React.createRef()
        this.startFalse = false;
        this.prevProps= Object.values(this.props.time);
        this.timeOut = [];
        this.globalVal= {};
                }
timing(){
console.log("Timing", this.timeOut)
this.timeOut.forEach((tOut)=>{
clearTimeout(tOut);
this.timeOut = this.timeOut.slice(1, this.timeOut.length);
});
clearTimeout(this.currentOut);
this.setState((prevState)=>{
let state = this.state.timeValue
this.condition = [
state.seconds === 0 && state.minutes !== 0,
state.seconds === 0 &&state.minutes === 0 && state.hours !== 0,
state.seconds === 0 &&state.minutes === 0 && state.hours === 0&&state.days!==0,
state.seconds === 0 &&state.minutes === 0 && state.hours === 0&&state.days === 0
];

this.action = [
    {seconds: 60-1, minutes: prevState.timeValue.minutes-1, hours: prevState.timeValue.hours, days: prevState.timeValue.days},
    {seconds: 60-1, minutes: 60-1, hours: prevState.timeValue.hours-1, days: prevState.timeValue.days},
    {seconds: 60-1, minutes: 60-1, hours: 24-1, days: prevState.timeValue.days-1},
    {seconds: prevState.timeValue.seconds, minutes: prevState.timeValue.minutes, hours: prevState.timeValue.hours, days: prevState.timeValue.days}

];


let value; 
let done = false;

this.condition.forEach((condition, index)=>{
        if(condition){
            done = true;
            if(index === this.condition.length-1){
                value = this.action[index];
                clearInterval(this.interval)
            }
            else{
            value = this.action[index]
            } 
        }
        else if(!condition && index === this.condition.length-1 && !done){
        value = {seconds: prevState.timeValue.seconds-1, minutes: prevState.timeValue.minutes,hours: prevState.timeValue.hours, days: prevState.timeValue.days}
    }  
});
this.allElements = [this.secondsRef.current, this.minutesRef.current,  this.hoursRef.current, this.daysRef.current];
let time = Object.values(prevState.timeValue);
let val = Object.values(value) ;
time.forEach((pTime, index)=>{
    if(pTime !== val[index]){
        this.allElements[index].classList.add('n');
     this.timeOut = [...this.timeOut, setTimeout(()=>{
        this.allElements[index].classList.remove("n");
        }, 500)]
    }
})
this.globalVal = value;


this.currentOut = setTimeout(()=>{
 this.props.current(() => {
        return { ...this.globalVal }
    })
}, 200)

 return {...prevState, timeValue: value}        
    }); 
};
    
componentDidUpdate(){
this.state.started && this.setState((prev)=>{return {...prev, started: false} })

let props = Object.values(this.props.time);
let reset = false;
Object.values(this.state.timeValue).forEach((value, index)=>{
    if(this.prevProps[index] !== props[index]){
        reset = true;
        this.prevProps = props;
        clearInterval(this.interval)
    }
})
reset &&  this.setState((prev)=>{
    return  {...prev, timeValue: this.props.time, started: true}
});
}

    render(){ 
        if(this.state.started){
        this.interval = setInterval(()=>{this.timing()}, 991);
        }
        return(
            <div className="time">
            <Seconds value={this.state.timeValue.seconds} r={this.secondsRef}/>
            <Minutes value={this.state.timeValue.minutes} r={this.minutesRef}/>
            <Hours value={this.state.timeValue.hours} r={this.hoursRef}/>
            <Days value={this.state.timeValue.days} r={this.daysRef}/>
            </div>
        )
    }
}

export default Time
