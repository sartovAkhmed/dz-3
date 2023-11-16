import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTask] = useState([])
  function onClickTaskAdd() {
    const text = prompt('plesse aded text')
    setTask([text, ...tasks])
  }

  return (
    <div className="App">
      <h1>List tasks</h1>
      <button onClick={onClickTaskAdd}>Добавить</button>
      {tasks.map(task => (
        <div>
          <h2>{task}</h2>
          <button>delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
