import React from 'react';
import { render } from 'react-dom';

console.clear();

const TODOS = [
  {
    id:3,
    createdAt:1512163308,
    name:"name 3",
    imageUrl:"imageUrl 3",
    text:"I eat my dinner in my bathtub"
  },
  {
    id:4,
    createdAt:1512163256,
    name:"name 4",
    imageUrl:"imageUrl 4",
    text:"Then I go to sex clubs"
  },
  {
    id:5,
    createdAt:1512163211,
    name:"name 5",
    imageUrl:"imageUrl 5",
    text:"Watching freaky people gettin' it on"
  }
  ];

const Title = ({todoCount}) => {
  return (
    <div>
       <div>
          <h1>Habits to-do ({todoCount})</h1>
       </div>
    </div>
  );
}


const Todo = ({todo, remove}) => {
  // Each Todo
  return (<a href="#" className="list-group-item" onClick={() => {remove(todo.id)}}>{todo.text}</a>);
}

const TodoList = ({todos, remove}) => {
  // Map through the todos
  const todoNode = todos.map((todo) => {
    return (<Todo todo={todo} key={todo.id} remove={remove}/>)
  });
  return (<div className="list-group" style={{marginTop:'30px'}}>{todoNode}</div>);
}


const TodoForm = ({addTodo}) => {
  // Input Tracker
  let input;
  // Return JSX
  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        addTodo(input.value);
        input.value = '';
      }}>
      <input className="form-control col-md-12" ref={node => {
        input = node;
      }} />
      <br />
    </form>
  );
};



// Contaner Component

class TodoApp extends React.Component{
  render(){
    // Render JSX
    return (
      <div>
        <Title todoCount={TODOS.length}/>
        <TodoForm />
        <TodoList
          todos={TODOS}
        />
      </div>
    );
  }
}

export default TodoApp;