import React, { Component } from 'react';

export class ButtonComponent extends Component {
    //simple state Component
    constructor() {
        super();
        this.state = {
            counter: 1
        };
        this.inc = () => {
            this.increase();
        };

        this.dec = () => {
            this.decrease();
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.inc}>Klik +++</button>
                <br/>
                <button onClick={this.dec}>Klik ---</button>
                <br/>
                <span>Numer of clicks:</span><span>{this.state.counter}</span>
            </div>
        );
    }

    increase() {
        this.setState(prevState => {
            return {
                counter: prevState.counter + 1,
            };
        });
    }

    decrease() {
        this.setState((prevState) => {
            return {
                counter: prevState.counter - 1
            }
        });
    }
}
