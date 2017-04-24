import React from 'react';
import axios from 'axios';
import ToDoList from './ToDoList';
import ToDoInput from './ToDoInput';
import each from 'lodash/each';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      todos: []
    }

    this.addTodo = this.addTodo.bind(this);
  }

  componentDidMount() {
    axios.get('/todo')
        .then((res) => {
          console.log(res.data);
          each(res.data, (elem) => {
            this.setState({todos: [...this.state.entries, elem]});
          })
        }).catch(err => {
          console.log('Err: ', err);
        })
  }

  addTodo(todo) {
    this.setState({ todo: [...this.state.todo, todo]});
  }

  render() {
    return (
      <div>
        <ToDoInput addTodo={this.addTodo}/>
        <ToDoList todos={this.state.todos}/>
      </div>
    )
  }
}

export default App;