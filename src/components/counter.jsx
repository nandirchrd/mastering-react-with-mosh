import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    list: ['list1', 'list2', 'list3'],
  };
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  formatCount = () => {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  };
  getBadgeClasses = () => {
    let classes = 'badge m-2 bg-';
    classes += this.state.count === 0 ? 'warning text-dark' : 'primary ';
    return classes;
  };
  getList = () => {
    const { list } = this.state;

    return list.length === 0 ? (
      <p>There are no list in the database</p>
    ) : (
      list.map((item) => <li key={item}>{item}</li>)
    );
  };
  render() {
    const { count, list } = this.state;
    return (
      <>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className='btn btn-secondary btn-sm'>
          Increment
        </button>
        <ul>{this.getList()}</ul>
      </>
    );
  }
}

export default Counter;
