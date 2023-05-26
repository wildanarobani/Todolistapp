import { ADD_TODO, TOOGLE_TODO, DELETE_TODO } from "../actions";

const initialState = [];

const todosReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_TODO:
      return [...state, action.payload];
    case TOOGLE_TODO:
      return state.map((todo) => 
        todo.id === action.payload.id
          ? {...todo, completed: !todo.completed }
            : todo
      );
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
};

export default todosReducer