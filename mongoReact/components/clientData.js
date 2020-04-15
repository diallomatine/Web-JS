import React from 'react';
import ReactDOM from 'react-dom';

export default class ClientData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clientData : new Array(1)};
    this.handleClick = this.handleClick.bind(this);
  }
  UNSAFE_componentWillMount(){
    let clientData = this.props.data;
    this.setState({clientData : clientData});
  }
  handleClick(ev){
    this.props.onLineClicked();
    ev.preventDefault();
  }
  sumOfRessource(tabRessource, ressourcePrice){
    let res = 0;
    let tab = tabRessource.forEach(elem => {
      res+= elem;
    });
    return (res*ressourcePrice).toFixed(2);
  }

  render(){
    return (
      <tr onClick={this.handleClick}>
				<th>{this.state.clientData.clientname}</th>
				<td className="electricite">electricite  : {this.sumOfRessource(this.state.clientData.electricite,this.props.electricitePrice)}</td>
				<td className="eau">eau : {this.sumOfRessource(this.state.clientData.eau,this.props.eauPrice)}</td>
				<td className="gaz">gaz  : {this.sumOfRessource(this.state.clientData.gaz,this.props.gazPrice)}</td>
			</tr>
    );
  }
}
