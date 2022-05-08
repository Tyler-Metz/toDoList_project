import * as React from 'react';

const setTasks = (props) => {
    let [tasks, clearTasks] = React.useState([]);
    let [checkBoxMatch, saveCheckBox] = React.useState({});
    if (tasks.includes(props.state)){
        console.log("Submitting the same thing! Not submitting.")
    }
    else if(props.state != "" && typeof props.state == 'string' ) tasks.push(props.state);

    const onClickClearTasks = () => {
        clearTasks([]);
        props.setState([]);
    }
    
    // Make new object because react is stupid and if it's the same object, it won't rerender. Reference memory
    // has to be different.
    const onClickSetToggle = (e) => {
        let prntEle = e.target.parentElement
        console.log("element parent: ", prntEle)
        let prntEleTxtCnt = prntEle.textContent;
        console.log("textContent", prntEleTxtCnt)

        let newCheckBoxMatch = checkBoxMatch;
        if (e.target.checked == true){
            newCheckBoxMatch[prntEleTxtCnt] = true
            saveCheckBox(newCheckBoxMatch);
        }
        if (e.target.checked == false){
            newCheckBoxMatch[prntEleTxtCnt] = false
            saveCheckBox(newCheckBoxMatch);
        }   

        console.log("checking checkbox data: ", newCheckBoxMatch); 
        
    }

    const onClickDeleteTask = (e) => {
        let parentLiToDelete = e.target.parentElement
        let newCheckBoxMatch = checkBoxMatch

        let checkBoxValToDelete = tasks.find(val => {
            console.log("Value: ", val, "looking for parent: ", parentLiToDelete)
            return val == parentLiToDelete.textContent
        })
        delete newCheckBoxMatch[checkBoxValToDelete];

        let parentIndToDelete = tasks.findIndex(val => {
            console.log("Value: ", val, "looking for parent: ", parentLiToDelete)
            return val == parentLiToDelete.textContent
        })
      
        // Object/Array has to be different, react only uses reference (Object ID)
        let newTasks = tasks.filter((val, ind) => {
            return ind != parentIndToDelete;
        })

        for (let i = 0; i < newTasks.length; i++) {
            for (let j = 0; j < Object.keys(newCheckBoxMatch).length; j++) {
                if (Object.keys(newCheckBoxMatch)[j] == newTasks[i] && newCheckBoxMatch[newTasks[i]] == true) {
                    newCheckBoxMatch[newTasks[i]] = true;
                }
            }

        } 

        saveCheckBox(newCheckBoxMatch);

        // Make new copy of array to state
        clearTasks(newTasks);
        props.setState(newTasks);
    }

    // Make checked state carry over to copy of array just made and save it to checkBoxMatch
    const setCheckBoxData = (val) => {

        if (Object.keys(checkBoxMatch).length = 0) {
            return true;
        }

        else if (Object.keys(checkBoxMatch).includes(val) && checkBoxMatch[val] == true) {
            return true;
        }

        else if (Object.keys(checkBoxMatch).includes(val) && checkBoxMatch[val] == false) {
            return false;
        }

    }

    return (
        <div id='get-body'>
            
                {tasks.map((val, ind) => {
                    return <li key={val}>
                            {val}
                            <input checked={false} className='checkboxes' type='checkbox' onChange={props.setChecked = e => e.target.checked}/>
                            <input type='button' className='delete' value='Delete' onClick={onClickDeleteTask}/>
                        </li>
                })}
            
            <input id='clear' type='button' value="Clear" onClick={onClickClearTasks}></input>
        </div>
    )
}

export default setTasks;