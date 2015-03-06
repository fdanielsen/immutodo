import React from 'react';
import Immutable from 'immutable';

import Store from './stores/Store';
import AddItem from './components/AddItem';
import Item from './components/Item';


var App = React.createClass({
    render () {
        var
            data = Store.get(),
            items = [];

        data.forEach((item, index) => {
            items.push(<Item key={index} id={index} item={item} />);
        });

        return (
            <ol>
                {items}
                <AddItem />
            </ol>
        );
    }
});


function render () {
    React.render(
        <App />,
        document.getElementById('app')
    );
}

render();

Store.setChangeListener(render);
