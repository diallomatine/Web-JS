import React from 'react';
import ReactDOM from 'react-dom';

export default class Client extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.props.onDeleteClicked();
  }
  render(){
    return (
      <div>
        {this.props.name}
        <span onClick = {this.handleClick}> ✘ </span>
      </div>
    );
  }
}
