import React, { Component } from 'react';
import { ButtonComponent } from './ButtonComponent';
import { ButtonComponent2 } from './ButtonComponent2';

export class Application extends Component {
    render() {
        return(
            <div>
                <ButtonComponent/>
                <ButtonComponent2/>
            </div>
        );
    }
}
