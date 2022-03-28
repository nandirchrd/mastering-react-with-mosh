import React, { Component } from 'react';

class Counter extends Component {
  state = {};
  getValue = () => {
    const value = this.props.counter.value;
    return value === 0 ? 'Zero' : value;
  };
  getBadgeClasses = () => {
    let classes = 'badge m-2 bg-';
    classes += this.getValue() === 'Zero' ? 'warning text-dark' : 'primary ';
    return classes;
  };
  render() {
    // DESTRUCTURING PROPS
    const { onIncrement, onDecrement, onDelete } = this.props; // methods
    const { counter } = this.props; // properties
    return (
      <div>
        <span
          style={{
            display: 'inline-block',
            minWidth: '4em',
          }}>
          <span className={this.getBadgeClasses()}>{this.getValue()}</span>
        </span>
        <button
          onClick={() => onIncrement(counter)}
          className={
            this.getValue() >= 99
              ? 'btn btn-success btn-sm mx-1 disabled'
              : 'btn btn-success btn-sm mx-1'
          }>
          +
        </button>
        <button
          onClick={() => onDecrement(counter)}
          className={
            this.getValue() === 'Zero'
              ? 'btn btn-danger btn-sm mx-1 disabled'
              : 'btn btn-danger btn-sm mx-1'
          }>
          -
        </button>
        <button
          className='btn btn-outline-danger btn-sm mx-1'
          onClick={() => onDelete(counter.id)}>
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
