import * as React from 'react';
import * as ReactDOM from 'react-dom';
import gsap from 'gsap';
import './css_files/main';
import GetTasks from './getTasks';
import SetTasks from './setTasks';

let prevRef;

function App() {
    const [chores, setChores] = React.useState([]);

    console.log('Current chores in index.tsx:', chores);

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

    function removeHandler(newKey, e) {
        gsap.to(e.target.parentElement, {
            x: 100,
            opacity: 0,
            duration: 0.5,
            rotation: "+=360",
            onComplete: () => deleteChore(newKey)
          });
    }

    function deleteChore(newKey) {
        setChores(prevState => prevState.filter(val => val.key !== newKey))
    }

    return (
        <div id='container'>
            <GetTasks 
                setChores={setChores} 
                chores={chores}
            />

            <SetTasks 
                setChores={setChores}
                chores={chores} 
                listRef={listRef}
                runRemoveHandler={removeHandler}
            />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#app')
)
