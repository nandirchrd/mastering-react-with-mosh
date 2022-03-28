import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
  render() {
    // DESTRUCTURING PROPS
    const { onIncrement, onDecrement, onDelete, onReset } = this.props; // methods
    const { counters } = this.props; // properties
    return (
      <>
        {counters.length !== 0 && (
          <button
            className='btn bg-primary btn-sm m-2 text-light'
            onClick={onReset}>
            Reset
          </button>
        )}
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
            selected={true}
          />
        ))}
      </>
    );
  }
}

export default Counters;
