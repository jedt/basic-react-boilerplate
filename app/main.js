var Child = require('./components/Child');

var Parent = React.createClass({
  render: function() {
    return (
      <div>
        <div>This is the parent</div>
        <Child childName="Joe" />
      </div>
    );
  }
});

React.render(<Parent />, document.getElementById('app'));