import React, { Component } from 'react';
import Counters from './components/counters';
import Navbar from './components/navbar';
import './App.css';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 0 },
      { id: 3, value: 4 },
      { id: 4, value: 0 },
    ],
  };
  handleIncrement = (counter) => {
    if (counter.value >= 99) {
      return;
    }
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };
  handleDecrement = (counter) => {
    if (counter.value <= 0) {
      return;
    }
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value--;
    this.setState({ counters });
  };
  handleDelete = (id) => {
    const filteredCounters = this.state.counters.filter((c) => c.id !== id);
    this.setState({ counters: filteredCounters });
  };
  handleReset = () => {
    const resetCounters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: resetCounters });
  };
  render() {
    const { counters } = this.state;
    return (
      <>
        <Navbar totalCounters={counters.filter((c) => c.value > 0).length} />
        <main className='container'>
          <Counters
            counters={counters}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          />
        </main>
      </>
    );
  }
}

export default App;
