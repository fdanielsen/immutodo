import React from 'react';
import Store from '../stores/Store';


export default React.createClass({

    handleKey (event) {
        var value = event.target.value;

        if (event.keyCode === 13) {
            Store.add(value);
            event.target.value = '';
        }
    },

    render () {
        return (
            <li>
                <input onKeyUp={this.handleKey} placeholder="New item" />
            </li>
        );
    }
});
