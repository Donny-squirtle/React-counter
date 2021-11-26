import React, { useEffect, useState } from "react";
const buttonStyle = {
    padding: '5px 10px',
    margin: '5px',
    fontSize: '20px',
    background: 'linear-gradient(#ffffff, #ffffff) padding-box, linear-gradient(to right, darkblue, darkorchid) border-box',
    borderRadius: '50em',
    border: '4px solid transparent',
    color: '#323639',
    minWidth: '40px'
}

function Button({ onClick , content }) {
    return (
        <button style={ buttonStyle } onClick={ onClick }>{ content }</button>
    )
}
function Counter() {
    const [counter, updateCounter] = useState(0);
    const [text, updateText] = useState('четное/нечетное');
    const [bgColor, updateBgColor] = useState('#000000');

    function handlerIncrease() {
        updateCounter(counter + 1);
    }

    function handlerDecrease() {
        updateCounter(counter <= 0 ? 0 : counter - 1);
    }

    function handlerReset() {
        updateCounter(0);
        
    }
    useEffect(() => {
        if (counter === 0) {
            updateText('четное/нечетное');
            updateBgColor('#000000');
        } else {
            if (counter % 2 === 0) {
                updateText('четное');
                updateBgColor('#4867d3');
            } else {
                updateText('нечетное');
                updateBgColor('#47a6ff');
            }
        }
    }, [counter]);
    
    return (
        <div className="counter" style = {{backgroundColor: `${bgColor}`}}>
            <div className="counter__text"><span>{counter}</span></div>
            <div className="counter__text">Введено { text } число</div>
            <div>
                <Button onClick={handlerIncrease} content={'+'}/>
                <Button onClick={ handlerReset } content={'Reset'}/>
                <Button onClick={ handlerDecrease } content={'-'}/>
            </div>
        </div>
    )
}

export default Counter;

