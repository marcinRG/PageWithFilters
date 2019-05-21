import React, { Component } from 'react';
import { Button } from './Button';
import { TextLabel } from './TextLabel';

export class ButtonComponent2 extends Component {
    constructor(props) {
        super(props);
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
                <Button title="Klik +++" action={this.inc}/>
                <Button title="Klik ---" action={this.dec}/>
                <TextLabel counter={this.state.counter}/>
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
