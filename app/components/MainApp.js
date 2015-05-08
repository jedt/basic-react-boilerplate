var TodoActions = require('../actions/TodoActions');
var TodoItems = require('./TodoItems');
var TodoTextInput = require('./TodoTextInput');
var TodoStore = require('../stores/TodoStore');

var MainApp = React.createClass({
  render: function() {
    var allTodos = TodoStore.getAll();

    return (
      <div>
        <div>Enter the item and press enter</div>
        <TodoTextInput onSave={this._onSave} />
        <TodoItems items={allTodos} />
      </div>
    );
  },

  _onSave: function(text) {
    TodoActions.create(text);

    this.setState({
      isEditing: false
    });
  }  
});

module.exports = MainApp;