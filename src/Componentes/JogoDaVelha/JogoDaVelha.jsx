import React from 'react' 
import './JogoDaVelha.css'
import circle_icon from '../Assets/O-Letter.png'
import x_icon from '../Assets/x.png'

const JogoDaVelha = () => {
    return(
        <div classname='container'>
            <h1 classname='title'> Jogo Da Velha Em <span>React</span></h1>
            <div classname= 'board'>
             </div>
        <button className="reset">Limpar</button>
        </div>
    )
}

export default JogoDaVelha