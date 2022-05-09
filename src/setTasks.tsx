import * as React from 'react';

const setTasks = (props) => {
    let [tasks, clearTasks] = React.useState([]);
    let [checkBoxMatch, saveCheckBox] = React.useState({});
    if (tasks.includes(props.state)){
        console.log("Submitting the same thing! Not submitting.")
    }
    else if(props.state[0] != "" && typeof props.state[0] == 'string' ) tasks.push(props.state);

    const onClickClearTasks = () => {
        clearTasks([]);
        props.setState([]);
    }
    
    const onClickSetToggle = (e) => {
        let prntEle = e.target.parentElement
        console.log("element parent: ", prntEle)
        let prntEleTxtCnt = prntEle.textContent;
        console.log("textContent", prntEleTxtCnt)

        if (e.target.checked == true){
            checkBoxMatch[prntEleTxtCnt] = true
            saveCheckBox(checkBoxMatch);
        }
        else if (e.target.checked == false){
            checkBoxMatch[prntEleTxtCnt] = false
            saveCheckBox(checkBoxMatch);
        }   

        console.log("checking checkbox data: ", checkBoxMatch);
    }

    const onClickDeleteTask = (key) => {
        // let parentLiToDelete = e.target.parentElement.textContent
        
        let parentIndToDelete = tasks.findIndex(val => {
            // console.log("Value: ", val[0], "looking for parent: ", parentLiToDelete)
            return val[1] == key
        })
      
        // Object/Array has to be different, react only uses reference (Object ID)
        let newTasks = tasks.filter((val, ind) => {
            return ind != parentIndToDelete;
        })

        props.setState(newTasks);
        clearTasks(newTasks);

        // console.log("Is checkbox checked? ", e.target.previousSibling.checked)
        // let parentLi = e.target.parentElement
        // let nextLi = parentLi.nextSibling
        // if (nextLi) {
        //     let doesNextLiHaveChildren = nextLi.hasChildNodes()

        //     if (doesNextLiHaveChildren) {
        //         switch (nextLi.children[0].checked) {
        //             case true:
        //                 console.log("Is next child checked? (true block)", nextLi.children[0].checked)
        //                 e.target.previousSibling.checked = true;
        //                 break;
        //             case false:
        //                 console.log("Is next child checked? (false block)", nextLi.children[0].checked)
        //                 e.target.previousSibling.checked = false;
        //                 break;
        //         }
        //     } 
        // } 
        
        // props.setState(newTasks);
        // clearTasks(newTasks);
    }

    return (
        <div id='get-body'>
            <ul id='add-item'>
                {tasks.map((val, ind) => {
                    return <li key={val[1]}> {val[0]}
                        <input className='checkboxes' type='checkbox' onClick={onClickSetToggle}/>
                        <input type='button' className='delete' value='Delete' onClick={() => onClickDeleteTask(val[1])}/>
                    </li>
                })}
            </ul>
            <input id='clear' type='button' value="Clear" onClick={onClickClearTasks}></input>
        </div>
    )
}

export default setTasks;