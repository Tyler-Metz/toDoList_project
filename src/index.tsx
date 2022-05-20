import * as React from 'react';
import * as ReactDOM from 'react-dom';
import gsap from 'gsap';
import './css_files/main';
import GetTasks from './getTasks';
import SetTasks from './setTasks';

let prevRef;

function App() {
    const [state, setState] = React.useState([]);
    console.log('Current State in App:', state);

    //// GSAP

    // Adding .listItems animation tween
    const listRef = React.useRef();

    React.useEffect(() => {
        if (prevRef != listRef.current) {
            gsap.from(listRef.current, {
                opacity: 0, 
                x: -100, 
                scale: 0,
                duration: 1,
            });
        }
        prevRef = listRef.current;
    });

    return (
        <div id='container'>
            <GetTasks setState={setState}/>
            <SetTasks setState={setState} state={state} listRef={listRef}/>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#app')
)
