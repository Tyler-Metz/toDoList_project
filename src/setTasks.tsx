import * as React from 'react';

export default function setTasks ({chores, setChores}) {

    const onClickClearTasks = () => {
        setChores([]);
    }
    
    const onClickSetToggle = chore => {    

        let choreIndex = chores.findIndex(x => x.choreId === chore.choreId);
        
        let newChores = [...chores];
        newChores[choreIndex].choreChecked = !chore.choreChecked;

        setChores([...newChores]);
    }

    const onClickDeleteTask = val => {
        if(val.choreChecked === true){
            const filteredChores = chores.filter(x => x.choreId !== val.choreId);
            setChores([...filteredChores]);    
        }  
    }

    return (
        <div id='get-body'>
            <ul id='add-item'>
                {chores.map((chore) => (
                   <tr key={chore.choreId}>
                   <td>{chore.choreValue}</td>
                   <td><input className='checkboxes' type='checkbox' onClick={() => onClickSetToggle(chore)} checked={chore.choreChecked}/></td>
                   <td><input type='button' className='delete' value='Delete' onClick={() => onClickDeleteTask(chore)}/></td>
                </tr> 
                ))}
            </ul>
            <input id='clear' type='button' value="Clear" onClick={onClickClearTasks}></input>
        </div>
    )
}