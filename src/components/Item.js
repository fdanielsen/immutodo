import React from 'react';
import Store from '../stores/Store';


export default React.createClass({
    shouldComponentUpdate (nextProps, nextState) {
        var isDirty = this.props.item !== nextProps.item;

        console.log('Should re-render? ', this.props.id, isDirty);

        return isDirty;
    },

    handleClick () {
        Store.toggleDone(this.props.id);
    },

    render () {
        return (
            <li>
                <input type="checkbox"
                       defaultChecked={this.props.item.get('done') === true}
                       onClick={this.handleClick} />
                {this.props.item.get('title')}
            </li>
        );
    }
});
