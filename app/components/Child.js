var Child = React.createClass({
  render: function() {
    return (
      <div>
        test and this is the <b>{this.props.childName}</b>.
      </div>
    );
  }
});

module.exports = Child;