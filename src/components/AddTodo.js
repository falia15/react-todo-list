import React, { Component } from 'react'

export class AddTodo extends Component {

  state = {
    title: ''
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value});

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({title: ''});
  }

  render() {
    return (
      <section className="block">
        <form onSubmit={this.onSubmit} className="form">
          <input type="text" name="title" placeholder="Add Todo ..." value={this.state.title} onChange={this.onChange}/>
          <input type="submit"/>
        </form>
      </section>
    )
  }
}

export default AddTodo
