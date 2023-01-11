//
import React, { useState } from "react";
import "../src/Button.css";
import background1 from "../src/assets/pexels-photo-129731.jpeg";
// import background from "../src/assets/pexels-pixabay-531880.jpg";

const Mydata = [
  {
    id: 1,
    name: "Rahul"
  },
  {
    id: 2,
    name: "Rohit"
  }
];

function App() {
  const [count, setcount] = useState(3);
  const [text, setText] = useState(100);
  return (
    <div
      className="MainView"
      style={{
        backgroundImage: `url(${background1})`
      }}
    >
      <div>
        <text className="textStyle">{count}</text>
        <br/>
        <text className="textStyle">{text}</text>
        <br/>
        <button className="Button" onClick={() => setText(text + 200)}>
          Click
        </button>
        <br/>
        <button className="Button" onClick={() => setText(0)}>
          Rest
        </button>
      </div>
      <div>
        <button id="Button" onClick={() => setcount(count + 1)}>
          Click
        </button>
        <ul>
          {Mydata.map((item) => (
            <div>
              <p key={item.id}>{item.name}</p>
              <text>{item.id}</text>
            </div>
          ))}
        </ul>
      </div>
      <div>
        <p> p--> Hello World</p>
        <h1>h1 --> Hello World</h1>
        <h2>h2 --> Hello World</h2>
        <h3>h3 --> Hello World</h3>
        <h4>h4 --> Hello World</h4>
        <span>span --> Hello World</span>
        <span>span --> Hello World</span>
      </div>
    </div>
  );
}

export default App;

