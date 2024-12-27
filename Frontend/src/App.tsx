import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import WebSocketComponent from "./Components/WebSocketComponent";
import WebApiComponent from "./Components/WebApiComponent";
import "./App.css";

//wss://ws-feed-public.sandbox.exchange.coinbase.com
//malformed JSON ^^

function App() {
  const [count, setCount] = useState(0);

  const [endpoint, setEndpoint] = useState<string>("");

  const handleFetch = () => {
    setEndpoint("https://jsonplaceholder.typicode.com/posts"); // Example endpoint
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <h1>Web API Component Example</h1>
        <button onClick={handleFetch}>Fetch API Data</button>
        <WebApiComponent endpoint={endpoint} />
      </div>
      <div>
        <WebSocketComponent url="wss://ws-feed.exchange.coinbase.com" />
      </div>
    </>
  );
}

export default App;
