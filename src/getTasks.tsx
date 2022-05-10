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
        props.setState([chore, generateKey()]);
        e.target.reset();
    }

    return (
            <form id='get-header' onSubmit={submitChore}> 
                <input type="text" placeholder="Enter chore here" onChange={getChore} required></input>
                <input type='submit'></input>
            </form>
    )
}

export default CustomChore;