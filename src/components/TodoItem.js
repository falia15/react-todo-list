import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {

  getStyle = () => {
    return {
        backgroundColor: this.props.todo.completed ? '#ECEFF1' : '',
        textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const {id, title} = this.props.todo;
    return (
      <div style={this.getStyle()}  className="form form--checkbox">
        <input id={id} type="checkbox"  onChange={this.props.markComplete.bind(this, id)} />
        <label htmlFor={id}></label>
        <div className="form__text">
          <span>{ title }</span>
        </div>
        <div className="form__btn">
          <button onClick={this.props.delTodo.bind(this, id)}>x</button>
        </div>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem
