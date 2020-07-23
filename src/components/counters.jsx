import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, onDelete, onIncrement, counters } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            onDelete={() => onDelete(counter.id)}
            onIncrement={() => onIncrement(counter)}
            key={counter.id}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
