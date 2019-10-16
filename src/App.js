import React from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navBar";
class App extends React.Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 4 }
    ]
  };

  handleIncrement = counter => {
    console.log(counter, "coutnerid");
    const countersClone = [...this.state.counters];
    const index = countersClone.indexOf(counter);
    countersClone[index] = { ...counter };
    countersClone[index].value++;
    this.setState({ counters: countersClone });
  };

  handleReset = counterId => {
    console.log("running reset");
    const countersClone = [...this.state.counters];
    const counters = countersClone.map(c => {
      c.value = 0;
    });
    this.setState({ counters: countersClone });
  };

  handleDelete = counterId => {
    console.log(counterId, "counterid");
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            handleIncrement={this.handleIncrement}
            handleReset={this.handleReset}
            handleDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
