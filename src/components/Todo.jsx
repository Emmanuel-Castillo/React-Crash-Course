import './Todo.css'

function Todo({title, onTodoDeleteProperty}) {

  return (
    <div className='todo'>
      <p>{title}</p>
      <button onClick={onTodoDeleteProperty}>Delete</button>
    </div>
  );
}

export default Todo;
