import * as React from 'react';

function CustomChore(props){
    const [choreText, setChoreText] = React.useState("");

    function generateKey() {
      return Math.floor(Math.random() * 1000000);
    }

    function submitChore(e) {
      e.preventDefault();
      if (choreText === "") {
        console.log(
          "TODO: show validation error message, user entered and empty string"
        );
        return;
      }
      //   props.onSubmit([choreText, generateKey()]);
      props.onSubmit(choreText);
      e.target.reset();
    }

    return (
      <div id="get-header-wrapper">
        <div id="get-header">
          <form id="get-item-wrapper" onSubmit={submitChore}>
            <input
              id="input"
              type="text"
              placeholder="Enter chore here"
              onChange={(e) => setChoreText(e.target.value)}
              required
            ></input>
            <button id="submit" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
}

export default CustomChore;