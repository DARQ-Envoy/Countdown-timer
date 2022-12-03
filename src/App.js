import Head from './components/header'
import Time from './components/time'
import Footer from './components/footer'
import { useEffect, useState} from 'react'
import SetTime  from './components/setTime'
import Setting from  './components/settingTime'



const App = ()=>{

const [text, setText]= useState("We're Lauching soon.");
const [permit, setPermit]= useState(true);
const [curentTime, setCurent] = useState({});
const [clsNme, setCls] = useState("setting hide");
const [isReset, setReset] = useState(false);
const [timing , setTiming] = useState({       
                seconds:0,
                minutes: 0,
                hours:0,
                days:0
        });
useEffect(()=>{
  if(isReset && sum(Object.values(curentTime)) === 0){
    setText("Launch");
  }
}, [curentTime])

        function sum(array){
          let value = 0;
          array.forEach((ele)=>{
            value+=ele;
          });
          return value;
        }


  return (
    <>
  <main>
    <header>
    <Head text={text} setTime={timing}  findSum={sum} reset={setReset}/>
    </header>
        <Time report={setText} auth={permit} setAuth={setPermit} time={timing} current={setCurent}/>
        {/* <Time/> */}
        <Setting name={clsNme} setName={setCls} setTime={setTiming}/>
        <SetTime setcl={setCls} />
  </main>
        <Footer/>
    </>

  
  )
}
export default App