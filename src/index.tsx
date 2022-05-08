import * as React from 'react';
import * as ReactDOM from 'react-dom';
import GetTasks from './getTasks';
import SetTasks from './setTasks';

function App() {

    const [chores, setChores] = React.useState([]);

    return (
        <div id='container'>
            <GetTasks chores={chores} setChores={setChores} />
            <SetTasks chores={chores} setChores={setChores} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#app')
)
