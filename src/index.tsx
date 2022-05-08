import * as React from 'react';
import * as ReactDOM from 'react-dom';
import GetTasks from './getTasks';
import SetTasks from './setTasks';

function App() {
    const [state, setState] = React.useState([]);
    const [checked, setChecked] = React.useState(false);
    console.log('Current State in App: ' , state);
    return (
        <div id='container'>
            <GetTasks setState={setState} />
            <SetTasks setState={setState} checked={checked} setChecked={setChecked} state={state} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#app')
)
