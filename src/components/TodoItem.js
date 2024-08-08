import React from 'react';

const TodoItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={toggleComplete}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={deleteTask}>Delete</button>
    </div>
  );
};

export default TodoItem;
