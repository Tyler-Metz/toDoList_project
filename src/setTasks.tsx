import * as React from 'react';
import gsap from 'gsap';

const setTasks = (props) => {
    // let [tasks, clearTasks] = React.useState([]);

    //// This will prevent customers entering a blank entry (if statement doesn't work at the moment)
    // if(props.state[0] != "" && typeof props.state[0] == 'string' ) {
    //     tasks.push(props.state);
    // }
    // else {
    //     console.log("Re-rendering...")
    // }

    const onClickClearTasks = () => {
        // clearTasks([]);
        // props.setState([]);
        props.setChores({});
    }
    
    const onClickSetToggle = (e) => {
        e.target.checked != e.target.checked;
    }

    // const onClickDeleteTask = (key) => {
        
    //     let parentIndToDelete = props.chores.findIndex(val => {
    //         return val.key == key
    //     })

    //     // Object/Array has to be different, react only uses reference (Object ID)
    //     let newTasks = props.chores.filter((val, ind) => {
    //         return ind != parentIndToDelete;
    //     })

    //     // State from getTasks getting passed down from App as props (not using context)
    //     props.setChores(newTasks);

    //     // State for deleting task one at a time or by clearing all of them
    //     // clearTasks(newTasks);

    // }

    // e is default "react event"
    // to get dom object, use e.target
    // then use vanilla javascript from there
    // const removeHandler = (key, e) => {
    //     gsap.to(e.target.parentElement, {
    //         x: 100,
    //         opacity: 0,
    //         duration: 0.5,
    //         rotation: "+=360",
    //       });
    // }

    return (
        <div id='get-body-wrapper'>
            <div id='get-body'>
            <div id='add-item-wrapper'>
            <ul id='add-item'>
                {Object.keys(props.chores).map((val, ind) => {
                    return <li className='listItems' ref={props.listRef} key={props.chores[val].key}> {props.chores[val].chore}
                        <input className='checkboxes' type='checkbox' onClick={onClickSetToggle}/>
                        <input type='button' className='delete' value='Delete' onClick={(e) => props.runRemoveHandler(props.chores[val].key, e)}/>
                    </li>
                })}
            </ul>
            <button id='clear' onClick={onClickClearTasks}>Clear</button>
            </div>
            </div>
        </div>
    )
}

export default setTasks;