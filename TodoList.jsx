import React from "react";
import { connect } from "react-redux";
import { toogleTodo, deleteTodo } from "../redux/actions";

const TodoList = ({ todos, toogleTodo, deleteTodo }) => {
  return(
    <ul className="list-group mt-3">
      {todos.map((todo) => (
      <li 
      key={todo.id} 
      className={"list-group-item ${todo.completed ? 'completed' : ''}"}>
        
        <span onClick={()=>toogleTodo(todo.id)}>{todo.text}</span>
        <button 
        className="btn btn-danger btn-sm ml-2" 
        onClick={()=>deleteTodo(todo.id)}
        >delete
        </button>
      </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  toogleTodo,
  deleteTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);