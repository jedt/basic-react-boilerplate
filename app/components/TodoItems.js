var TodoItems = React.createClass({
  render: function() {
    var allTodos = this.props.items;
    var todos = [];


    for (var key in allTodos) {
      todos.push(<li>{allTodos[key].text}</li>);
    }

    return (
      <div>
        To do:
        <ul id="todo-list">{todos}</ul>
      </div>
    );
  }
});

module.exports = TodoItems;