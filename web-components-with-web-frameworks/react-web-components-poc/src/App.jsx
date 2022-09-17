import { useState } from "react";

import image from "./assets/book.jpg";

import "../../web-components/counter-wc";
import "../../web-components/book-cover";
import WcWrapper from "./WcWrapper";

function App() {
  const [increment, setIncrement] = useState(1);
  const [color, setColor] = useState("red");

  return (
    <div>
      <div className="increment-container">
        <button onClick={() => setIncrement(1)}>Increment by 1</button>
        <button onClick={() => setIncrement(2)}>Increment by 2</button>
      </div>

      <select value={color} onChange={(e) => setColor(e.target.value)}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>

      <WcWrapper wcTag="counter-wc" increment={increment} color={color} />

      <WcWrapper wcTag="book-cover" url={image} />
    </div>
  );
}

export default App;
