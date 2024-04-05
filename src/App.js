import './App.css';
import React from "react";
import { RecoilRoot, useRecoilState } from "recoil";
import { countState } from "./atom";


function Counter() {
  const [count, setCount] = useRecoilState(countState);

  return (
    <div>
      <h1>HI</h1>
      <button onClick={() => {
        setCount(count + 1);

      }}>+</button>
    </div>

  );
}

function DisplayCounter() {
  const [count] = useRecoilState(countState);
  return <div>{count}</div>;
}

function App() {
  return (
    <RecoilRoot>
      <div>
        <Counter />
        <DisplayCounter />
      </div>

    </RecoilRoot>

  );
}

export default App;
