import React,{useState} from 'react'
import './JogoDaVelha.css'
import circle_icon from '../Assets/O-Letter.png'
import x_icon from '../Assets/x.png'

let data = ["","","","","","","","",""];

const JogoDaVelha = () => {

    let [count,setCount] = useState(0);
    let [lock,setlock] = useState(false);


    const toggle = (e,num) => {
        if (lock) {
            return 0;
        }
        if (count%2===0){
            e.target.innerHTML = `<img src=' ${x_icon}'>`;
            data[num]="x";
            setCount(++count);
        }
        else{
            e.target.innerHTML = `<img src= '${circle_icon}'>`;
            data[num]="o";
            setCount(++count);
        }
    }

    return(
        <div classname="container">
            <h1 classname="title"> Jogo Da Velha Em <span>React</span></h1>
            <div classname= "board">
                <div classname= "row">
                    <div classname= "slots" onClick={(e)=>{toggle(e,0)}}></div>
                    <div classname= "slots" onClick={(e)=>{toggle(e,1)}}></div>
                    <div classname= "slots" onClick={(e)=>{toggle(e,2)}}></div>
                </div>
                <div classname= "row">
                    <div classname= "slots" onClick={(e)=>{toggle(e,3)}}></div>
                    <div classname= "slots" onClick={(e)=>{toggle(e,4)}}></div>
                    <div classname= "slots" onClick={(e)=>{toggle(e,5)}}></div>
                </div>
                <div classname= 'row'>
                    <div classname= 'slots' onClick={(e)=>{toggle(e,6)}}></div>
                    <div classname= 'slots' onClick={(e)=>{toggle(e,7)}}></div>
                    <div classname= 'slots' onClick={(e)=>{toggle(e,8)}}></div>
                </div>
             </div>
        <button className="reset">Limpar</button>
        </div>
    )
}

export default JogoDaVelha