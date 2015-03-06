import Immutable from 'immutable';


var _data = Immutable.fromJS([
    {
        title: 'First item of business',
        done: false
    },
    {
        title: 'Second item of business',
        done: false
    }
]);

var _changeCallback;


export default {
    get () {
        return _data;
    },

    add (title) {
        _data = _data.push(Immutable.Map({
            title: title,
            done: false
        }));

        this.emitChange();
    },

    toggleDone (key) {
        var
            item = _data.get(key),
            newItem = item.set('done', !item.get('done'));

        _data = _data.set(key, newItem);

        this.emitChange();
    },

    emitChange () {
        if (_changeCallback) {
            _changeCallback();
        }
    },

    setChangeListener (fn) {
        _changeCallback = fn;
    },
};
