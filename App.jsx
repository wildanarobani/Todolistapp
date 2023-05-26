import React from "react"
import { Provider } from "react-redux"
import TodoList from "./components/TodoList"
import AddTodo from "./components/AddTodo"
import store from "./redux/store"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <>
      <Provider store={store}>
        <div className='container'>
          <h1 className='mt-5'>Todo List</h1>
          <AddTodo />
          <TodoList />
        </div>
      </Provider>
    </>
  );
}

export default App