import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, toggleComplete, deleteTask }) => {
  return (
    <div className="todo-list">
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          toggleComplete={() => toggleComplete(index)}
          deleteTask={() => deleteTask(index)}
        />
      ))}
    </div>
  );
};

export default TodoList;
