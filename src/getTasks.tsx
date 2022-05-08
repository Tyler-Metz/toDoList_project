import * as React from 'react';

function CustomChore(props){
    const [chore, setChore] = React.useState("Hi")
    
    function getChore(e){ 
        setChore(e.target.value);
    }

    function submitChore(e) {
        e.preventDefault()
        props.setState(chore)
        e.target.reset();
        setChore("");
    }

    return (
            <form id='get-header' onSubmit={submitChore}> 
                <input onChange={getChore}></input>
                <input type='submit'></input>
            </form>
    )
}

export default CustomChore;