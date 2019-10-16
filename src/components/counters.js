import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleReset}> Reset </button>
        {this.props.counters.map(counter => (
          <Counter
            // id={counter.id}
            key={counter.id}
            // initialValue={counter.value}
            onDelete={this.props.handleDelete}
            counter={counter}
            onIncrement={this.props.handleIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
