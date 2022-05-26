import * as React from 'react';
import * as ReactDOM from 'react-dom';
import gsap from 'gsap';
import './css_files/main';
import GetTasks from './getTasks';
import SetTasks from './setTasks';

let prevRef;

function App() {
    const [tasks, setTasks] = React.useState([]);
    console.log("Current Tasks in App:", tasks);

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

    function handleSubmit(newChore) {
      setTasks((prev) => [...prev, newChore]);
    }

    function handleDelete(taskToRemove) {
      console.log("PICKLE taskToRemove", taskToRemove);
      setTasks((prev) => prev.filter((t) => t !== taskToRemove));
    }

    return (
      <div id="container">
        <GetTasks onSubmit={handleSubmit} />
        <SetTasks
          tasks={tasks}
          listRef={listRef}
          onClickDeleteTask={handleDelete}
          onClickClearTasks={() => setTasks([])}
        />
      </div>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector('#app')
)
