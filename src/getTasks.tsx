import * as React from 'react';

export default function CustomChore({chores, setChores}) {

    const getDateString = () => {
        return Math.floor(Math.random() * 100000).toString();
    }

    const obj = { 
        choreId: getDateString(),
        choreValue: '',
        choreChecked: false
    }

    const [chore, setChore] = React.useState(obj);
    
    function getChore(e){
        setChore({
            ...chore,
            choreValue: e.target.value
        });
    }

    const submitChore = () => {  
            setChores([...chores, chore]);
            setChore(obj);   
    }

    return (
            <div id="get-header"> 
                <input value={chore.choreValue} onChange={getChore}></input>
                <button type='button' onClick={submitChore}>Submit</button>
            </div>
    )
}
