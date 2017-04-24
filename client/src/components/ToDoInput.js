import React from 'react';
import axios from 'axios';

class ToDoInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todo: '',
      due: ''
    }
  }

  formSubmit(event) {
    event.preventDefault();
    return axios.post('/todo', {
      todo: this.state.todo,
      due: this.state.due
    }).then((data) => {
      console.log(data);
      this.props.addTodo(data);
    }).catch((err) => {
      console.log('Err: ', err);
    })
  }

  render() {
    return (
      <div>  
        <form onSubmit={(event) => this.formSubmit(event)}>
          <input className='todo' onChange={(event) => this.state.todo = event.target.value } placeholder='ToDo'/>
          <input className='due' onChange={(event) => this.state.due = event.target.value } placeholder='Due'/>
        </form>
      </div>
    )
  }
}

export default ToDoInput;