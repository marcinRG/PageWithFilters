import React, { Component } from 'react';

export class ButtonComponent extends Component {
    render() {
        return (
            <div>
                <button>--- Klik me! --- </button>
                <br/>
                <span>Numer of clicks:</span><span>0</span>
            </div>
        );

    }
}
