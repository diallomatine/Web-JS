import React from 'react';
import ReactDOM from 'react-dom';

export default class Ressource extends React.Component {
  constructor(props){
    super(props)
    this.state = {name : "", value : ""}
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev){
    this.setState({value: ev.target.value})
    this.props.onRessourceValChanged(ev.target.value,ev.target.name);
  }

  UNSAFE_componentWillMount(){
    let value = this.props.value
    let name = this.props.name;
    this.setState({name: name, value:value});
  }

  render(){
    return (
      <span className={this.state.name}>
        <label>{this.state.name}
          <input type="text" name={this.state.name} value={this.state.value} onChange={this.handleChange}/>
        </label>
      </span>
    );
  }
}
