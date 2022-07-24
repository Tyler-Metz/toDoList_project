import * as React from 'react';

function CustomChore(props){
    const [chore, setChore] = React.useState(["", null])
    
    function getChore(e){
        setChore(e.target.value);
    }

    function generateKey() {
        return Math.floor(Math.random() * 1000000);
    }

    function submitChore(e) {
        e.preventDefault();

        console.log('Chores in getTasks (before): ', props.chores);

        props.setChores(
            [...props.chores, {chore: chore, key: generateKey()}]
        );

        console.log('Chores in getTasks (after): ', props.chores);

        e.target.reset();
    }

    return (
        <div id='get-header-wrapper' >
            <div id='get-header'> 
                <form id='get-item-wrapper' onSubmit={submitChore}>
                    <input id='input' type="text" placeholder="Enter chore here" onChange={getChore} required></input>
                    <button id='submit' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CustomChore;