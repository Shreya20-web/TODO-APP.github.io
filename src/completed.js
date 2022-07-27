import React, { useState } from 'react';
import Print from './print'

function Completed() {
    let todoobj =[]
    let [todolist, settodoobj] = useState(todoobj);
    let giveinput = () => {
        let x = prompt("enter name")
        let y = prompt("enter dis")
        let temp = {
            "name": x,
            "des": y
        }
        settodoobj((todolist) => {
            return [...todolist, temp]
        })
        console.log(todolist)
    }
    return (
            <div className="box3">
                <header>
                    <h1>Completed</h1>
                    <h2 className="counter">{todolist.length}</h2>
                </header>
                <button class="btn2" onClick={giveinput}>+</button>
                <Print todolist={todolist} />
                
            </div>
        
    );
}

export default Completed;