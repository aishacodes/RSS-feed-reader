import { useState } from "react";
import "./App.css";

function App() {
  const [feeds, setFeed] = useState([]);

  const addFeed = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <form onSubmit={addFeed}>
        <label>URL</label>
        <div>
          <input
            type="text"
            name="feed"
            id=""
            placeholder="Feed URL or Feeder"
          />
          <button>Add</button>
        </div>
      </form>

      {feeds.map((feed) => (
        <div>{feed}</div>
      ))}
    </div>
  );
}

export default App;
