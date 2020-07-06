import React from 'react';
import TaskList from './components/TodoList';
import TaskForm from './components/TodoForm';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state


  constructor() {
    super();
    this.state = {
      tasks: [
        {
          task: 'Organize Garage',
          id: Date.now(),
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: Date.now(),
          completed: false
        },
        {
            task: 'Wash dog',
            id: Date.now(),
            completed: false
          },
          {
            task: 'Cook Dinner',
            id: Date.now(),
            completed: false
          }
      ],
      taskArray: ''
    };
  }

  addTask = e => {
    e.preventDefault();
    const newTask = { task: this.state.taskArray, completed: false, id: Date.now() };
    this.setState({ 
      tasks: [...this.state.tasks, newTask], 
      task: '' 
    });
  };
  changeTask = e => this.setState({ [e.target.name]: e.target.value });

  toggleTaskComplete = id => {
    let tasks = this.state.tasks.slice();
    tasks = tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
        return task;
      } else {
        return task;
      }
    });
    this.setState({ tasks });
  };

  clearCompletedTasks = e => {
    e.preventDefault();
    let tasks = this.state.tasks.filter(task => !task.completed);
    this.setState({ tasks });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TaskList
          handleToggleComplete={this.toggleTaskComplete}
          tasks={this.state.tasks}
        />
        <TaskForm
          value={this.state.task}
          handleTaskChange={this.changeTask}
          handleAddTask={this.addTask}
          handleClearTask={this.clearCompletedTasks}
        />
      </div>
    );
  }
}

export default App;
