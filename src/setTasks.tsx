import * as React from 'react';
import gsap from 'gsap';

const setTasks = (props) => {
  const onClickClearTasks = () => {
    props.onClickClearTasks();
  };

  const onClickSetToggle = (e) => {
    e.target.checked != e.target.checked;
  };

  // e is default "react event"
  // to get dom object, use e.target
  // then use vanilla javascript from here
  const removeHandler = (task, e) => {
    gsap.to(e.target.parentElement, {
      x: 100,
      opacity: 0,
      duration: 5,
      rotation: "+=360",
      onComplete: () => props.onClickDeleteTask(task),
    });
  };

  return (
    <div id="get-body-wrapper">
      <div id="get-body">
        <div id="add-item-wrapper">
          <ul id="add-item">
            {props.tasks.map((val, idx) => {
              return (
                <li className="listItems" ref={props.listRef} key={val}>
                  {" "}
                  {val}
                  <input
                    className="checkboxes"
                    type="checkbox"
                    onClick={onClickSetToggle}
                  />
                  <input
                    type="button"
                    className="delete"
                    value="Delete"
                    onClick={(e) => removeHandler(val, e)}
                  />
                </li>
              );
            })}
          </ul>
          <button id="clear" onClick={onClickClearTasks}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default setTasks;