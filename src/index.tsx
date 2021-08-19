import * as React from 'react';
import * as ReactDOM from 'react-dom';
import GetTasks from './getTasks';
import SetTasks from './setTasks';

function App() {
    const [state, setState] = React.useState([]);
    console.log('Current State in App:', state);
    return (
        <div id='container'>
            <GetTasks setState={setState} />
            <SetTasks setState={setState} state={state} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#app')
)
