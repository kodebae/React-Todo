import React from 'react';



const TaskForm = props => {
  return (
    <form>
      <input
        onChange={props.handleTaskChange}
        type="text"
        name="task"
        value={props.value}
        placeholder="...task"
      />
      <button onClick={props.handleAddTask}>Add Task Here</button>
      <button onClick={props.handleClearTask}>Clear Completed Task</button>
    </form>
  );
};

export default TaskForm;