import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = () => {
  const [counter, setCounter] = useState(0);

  const onChangeIncrement = () => {
    setCounter((counter) => counter + 1);
  };

  const onChangeDecrement = () => {
    setCounter((counter) => {
      if (counter <= 0) return 0;
      return counter - 1;
    });
  };

  return (
    <div className="body">
      <div className="container">
        <button className="increment" onClick={onChangeIncrement}>
          Increment
        </button>
        <span className="counter">{counter}</span>
        <button className="decrement" onClick={onChangeDecrement}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.querySelector("#root"));
