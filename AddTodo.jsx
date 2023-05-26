import { useState } from "react"
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

const AddTodo = ({addTodo}) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.trim() === ''){
      return;
    }
    addTodo(text);
    setText('');
  };

  return(
    <form className="mt-3" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
        type="text"
        className="form-control"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo" 
        />
        <button type="submit" className="btn btn-primary">Add</button>
      </div>
    </form>
  );
};

const mapDispatchToProps = {
  addTodo,
};

export default connect(null, mapDispatchToProps)(AddTodo);