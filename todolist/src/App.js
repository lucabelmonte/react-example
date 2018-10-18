import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Button, Form, FormGroup, Label, Input, FormText, ListGroup, ListGroupItem } from 'reactstrap';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Test2></Test2>

      </div>
    );
  }
}

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: 1
    };

  }
  render(){
    return (
      <div>
        Hello world {this.props.name}
        <button onClick={() => this.setState({text: this.state.text+1})}>+1</button>
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}

class Test2 extends Component {
  constructor() {
    super();
    this.state = {
      currentTodo: '',
      todos: []
    };

    
    
    this.onChangeText = this.onChangeText.bind(this);
    this.onSubmitText = this.onSubmitText.bind(this);
    this.onDelete = this.onDelete.bind(this);

  }

  componentDidMount(){
    fetch('https://randomuser.me/api/?results=40')
      .then(response => response.json())
      .then(data => {
        const result = data.results;
      let users = result.map((d, key) => {
        return (
          <ListGroupItem key={key}>
            <img src={d.picture.large} alt="few"></img>
            <p>{key + 1}: {d.name.first} {d.name.last}</p>
          </ListGroupItem>
        
        );
      });

        this.setState({user: users})
        console.log(result);
      });
  }

  onChangeText(event) {
    this.setState({ currentTodo: event.target.value });
  }

  onSubmitText(event) {
    //The preventDefault() method stops the default action of an element from happening.
    event.preventDefault()
    if(this.state.currentTodo.trim() != '')
      this.setState({
        currentTodo: '', //We clean the input text
        todos: [...this.state.todos, this.state.currentTodo.trim()]
      });
  }

  onDelete(event){
    const i = event.target.value;
    this.state.todos.splice(i, 1);
    this.setState({
      todos: this.state.todos
    })
  }

  render() {
    let {state} = this;
    return (
      <div>
        <Form onSubmit={this.onSubmitText}>
          <FormGroup >
            <Input value={this.state.currentTodo} onChange={this.onChangeText} />
            <Button type="submit">Aggiungi</Button>
          </FormGroup>
        </Form>

        <ListGroup>
          {
            state.todos.map((todo, key) => {
              return (
                <ListTodo todo={todo} keys={key} onDelete={this.onDelete}></ListTodo>
              );
            })
          }
        </ListGroup>

        <ListGroup>
          {
            state.user
          }
        </ListGroup>
        <ul>
          
        </ul>
      </div>
    )
  }
}

class ListTodo extends Component {
  
  render(){
    let { props } = this;
    return (
      <ListGroupItem>
        {props.keys+1}: {props.todo}
        <Button value={props.keys} color="danger" onClick={props.onDelete}>Elimina</Button>
      </ListGroupItem>
    );
  }
}

export default App;
