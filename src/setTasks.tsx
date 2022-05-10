import * as React from 'react';
import gsap from 'gsap';

const setTasks = (props) => {
    let [tasks, clearTasks] = React.useState([]);

    //// This will prevent customers entering a blank entry (if statement doesn't work at the moment)
    if(props.state[0] != "" && typeof props.state[0] == 'string' ) {
        tasks.push(props.state);
    }
    else {
        console.log("Re-rendering...")
    }

    const onClickClearTasks = () => {
        clearTasks([]);
        props.setState([]);
    }
    
    const onClickSetToggle = (e) => {
        e.target.checked != e.target.checked;
    }

    const onClickDeleteTask = (key) => {
        
        let parentIndToDelete = tasks.findIndex(val => {
            return val[1] == key
        })

        // Object/Array has to be different, react only uses reference (Object ID)
        let newTasks = tasks.filter((val, ind) => {
            return ind != parentIndToDelete;
        })

        // State from getTasks getting passed down from App as props (not using context)
        props.setState(newTasks);

        // State for deleting task one at a time or by clearing all of them
        clearTasks(newTasks);

    }

    // e is default "react event"
    // to get dom object, use e.target
    // then use vanilla javascript from here
    const removeHandler = (key, e) => {
        gsap.to(e.target.parentElement, {
            x: 100,
            opacity: 0,
            duration: 1,
            onComplete: () => onClickDeleteTask(key)
          });
    }

    return (
        <div id='get-body'>
            <ul id='add-item'>
                {tasks.map((val, ind) => {
                    return <li className='listItems' ref={props.listRef} key={val[1]}> {val[0]}
                        <input className='checkboxes' type='checkbox' onClick={onClickSetToggle}/>
                        <input type='button' className='delete' value='Delete' onClick={(e) => removeHandler(val[1], e)}/>
                    </li>
                })}
            </ul>
            <input id='clear' type='button' value="Clear" onClick={onClickClearTasks}></input>
        </div>
    )
}

export default setTasks;