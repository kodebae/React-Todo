// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js


import React from 'react';
import Task from './Todo';




const TaskList = props => {
  return (
    <div>
      {props.tasks.map(task => (
        <Task
          handleToggleComplete={props.handleToggleComplete}
          key={task.id}
          task={task}
        />
      ))}
    </div>
  );
};

export default TaskList;