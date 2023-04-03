import './App.css';
import { useState } from 'react';
import ListItem from './components/ListItem';
import ParticlesBg from 'particles-bg'

let nextId = 0;

const App = () => {
  const [todoName, setTodoName] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    if (todoName != '') {
      todoList.push({
        name: todoName,
        key: todoName + nextId,
        id: nextId++,
        delete: deleteTodo
      });
      setTodoName('');
    }

    //console.log(todoList);
  }

  const handleKeypress = e => {
    if (e.keyCode === 13) {
      addTodo();
    }
  }

  const deleteTodo = key => {
    //console.log(key);

    setTodoList((current) => {
      return current.filter((todo) => todo.key !== key);
    })

    if (todoList.length === 0) {
      nextId = 0;
    }

    //console.log(todoList);
  }

  return (
    <div>
      <ParticlesBg className="particles" type="cobweb" color="#ffffff" num='50' bg={{
        position: "absolute",
        zIndex: 0
      }} />
      <div className="app" id="overlay">
        <div className="app_todoheader">
          <div />
          <h1 className="headtext">ToDo List</h1>
          <div />
        </div>
        <div className="app_listform">
          <div className="app_entertaskname">
            <input className="app_entertaskname-input"
              onChange={e => setTodoName(e.target.value)}
              onKeyDown={handleKeypress}
              value={todoName}
              placeholder="Enter a task..."
            >

            </input>
            <button type="submit" onClick={addTodo} className="app-entertaskname-addbutton">
              Add
            </button>
          </div>

          <div className="app_label">
            <div></div>
            <h5 className='thingstodo'>Things to do</h5>
            <div></div>
          </div>

          <div className="app_todoitems">
            <ul>
              {todoList != null ? (todoList.map(todo => (<ListItem key={todo.key} todo={todo} deleteFunc={deleteTodo} />))) : null}
              {/* {todoList.map(todo => (<li key={todo.id}>{todo.name}</li>))} */}
            </ul>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
