// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import NavBar from './components/navBar';
import Counters from './components/counters';
// import { render } from '@testing-library/react';

class App extends Component {

    state = {
        // we move the state here for multiple components in sync
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ]
    };

    handleIncrement = counter => {
        const incrementCounter = [...this.state.counters];//copy props
        const index = incrementCounter.indexOf(counter);//get the id of counter element
        incrementCounter[index] = { ...counter };//specify which counter element
        incrementCounter[index].value++;
        this.setState({ counters: incrementCounter });
    }

    handleReset = () => {
        const resetCounter = this.state.counters.map(
            i => {
                i.value = 0;
                return i;
            }
        );
        this.setState({ counters: resetCounter });//doesnt work 'coz of single source of truth
    }

    //implementeng single source of truth
    handleDelete = (counterId) => {
        //create new array
        const filteredCounters = this.state.counters.filter(
            c => c.id !== counterId
        );

        this.setState({ counters: filteredCounters });//use the array to update the state
    }

    render() {
        return (
            <React.Fragment>
                <NavBar
                    totalCounters={
                        this.state.counters.filter(
                            c => c.value > 0).length
                    }
                />
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default App;
