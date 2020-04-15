import React from 'react';
import ReactDOM from 'react-dom';

export default class NewClient extends React.Component{

  constructor(props) {
    super(props);
    this.state = {value : ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(ev){
    this.setState({value : ev.target.value});
    ev.preventDefault();
  }

  handleSubmit(ev){
    ev.preventDefault();
    this.props.OnButtonCreateClicked(ev.target.clientname.value);
    this.setState({value : ''});
  }

  render (){
    return (
      <form onSubmit={this.handleSubmit}>
  			<label>new client name:
          <input type="text" name="clientname" value={this.state.value} onChange={this.handleChange} required/>
        </label>
        <input type="submit" value="Create"/>
  		</form>
    );
  }
}
