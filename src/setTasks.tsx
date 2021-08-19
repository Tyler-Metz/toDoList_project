import * as React from 'react';

const setTasks = (props) => {
    let [tasks, clearTasks] = React.useState([]);

    if (props.state != "" && typeof props.state == 'string') tasks.push(props.state);

    const onClickClearTasks = () => {
        clearTasks([]);
        props.setState([]);
    }
    
    const onClickDeleteTask = (e) => {
        let parentLiToDelete = e.target.parentElement.textContent
        
        let parentIndToDelete = tasks.findIndex(val => {
            console.log("Value: ", val, "looking for parent: ", parentLiToDelete)
            return val == parentLiToDelete
        })
      
        // Object/Array has to be different, react only uses reference (Object ID)
        let newTasks = tasks.filter((val, ind) => {
            return ind != parentIndToDelete;
        })

        console.log("Is checkbox checked? ", e.target.previousSibling.checked)
        let parentLi = e.target.parentElement
        let nextLi = parentLi.nextSibling
        if (nextLi) {
            let doesNextLiHaveChildren = nextLi.hasChildNodes()

            if (doesNextLiHaveChildren) {
                switch (nextLi.children[0].checked) {
                    case true:
                        console.log("Is next child checked? (true block)", nextLi.children[0].checked)
                        e.target.previousSibling.checked = true;
                        break;
                    case false:
                        console.log("Is next child checked? (false block)", nextLi.children[0].checked)
                        e.target.previousSibling.checked = false;
                        break;
                }
            }
        }
        
        props.setState(newTasks);
        clearTasks(newTasks);
    }

    return (
        <div id='get-body'>
            <ul id='add-item'>
                {tasks.map((val, ind) => {
                    return <li>{val}
                        <input className='checkboxes' type='checkbox'/>
                        <input type='button' className='delete' value='Delete' onClick={onClickDeleteTask}/>
                    </li>
                })}
            </ul>
            <input id='clear' type='button' value="Clear" onClick={onClickClearTasks}></input>
        </div>
    )
}

export default setTasks;