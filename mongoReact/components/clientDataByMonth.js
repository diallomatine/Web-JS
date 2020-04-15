import React from 'react';
import ReactDOM from 'react-dom';


export default class ClientDataByMonth extends React.Component {
  constructor(props){
    super(props);
  }
  cellsOfRessource(tab, price){
    let tabTds = tab.map(
        (e,i)=> <td key={i}>{e}/{(price*e).toFixed(2)}
            </td>
    );
    return tabTds;
  }

  render(){
    const tabTdsElect = this.cellsOfRessource(this.props.data.electricite,this.props.electricitePrice)
    const tabTdsEau = this.cellsOfRessource(this.props.data.eau, this.props.eauPrice);
    const tabTdsGaz = this.cellsOfRessource(this.props.data.gaz, this.props.gazPrice);

    return (
      <table >
        <caption> Data pour {this.props.data.clientname}</caption>
        <thead>
         <tr>
           <th>Jan</th><th>Fev</th><th>Mars</th><th>Avril</th><th>Mai</th>
           <th>Jui</th><th>Juil</th><th>Août</th><th>Sep</th><th>Oct</th>
           <th>Nov</th><th>Dec</th>
         </tr>
       </thead>
      <tbody>
        <tr className="electricite">
          {tabTdsElect}
        </tr>
        <tr className="eau">
          {tabTdsEau}
        </tr>
        <tr className="gaz">
          {tabTdsGaz}
        </tr>

      </tbody>
      </table>
    );
  }
}
