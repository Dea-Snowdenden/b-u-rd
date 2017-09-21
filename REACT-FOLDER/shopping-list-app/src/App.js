import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'reactDOM';

class ShoppingList extends Component {
  render() {
    return (
      <div className="shopping-list">
        <h1> SHOPPING LIST FOR {this.props.name}</h1>
        <ul>
        {listItems}
        </ul>
       </div>
    );
  }
}

render() {
  var listItems =
  this.state.list.forEach((item, i) => {
    list.Items.push(<ListItem item={item} onClick={()} = 
  })
}

ReactDOM.render(
  <ShoppingList name="Dea" />,
  document.getElementById('container')
);
