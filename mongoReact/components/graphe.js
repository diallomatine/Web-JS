import React from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js';

export default class Graphe extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    const context = document.getElementById("graphe").getContext('2d');
    let data = {
      labels : ["Jan", "Fev","Mars", "Avril", "Mai","Juin",
      "juil", "Août", "Sep", "Oct", "Nov", "Dec"],
      datasets : [
        {
          label : "électricité",
          data : this.props.data.electricite.map(
            (e,i)=>(e*this.props.electricitePrice).toFixed(2)
          ),
          backgroundColor : [
            "rgba(128,255,128,0.5)",
            "rgba(128,255,128,0.5)",
            "rgba(128,255,128,0.5)",
            "rgba(128,255,128,0.5)",
            "rgba(128,255,128,0.5)",
            "rgba(128,255,128,0.5)",
            "rgba(128,255,128,0.5)",
            "rgba(128,255,128,0.5)",
            "rgba(128,255,128,0.5)",
            "rgba(128,255,128,0.5)",
            "rgba(128,255,128,0.5)",
            "rgba(128,255,128,0.5)"
          ],
          borderColor : [
            "rgba(128,255,128,1)",
            "rgba(128,255,128,1)",
            "rgba(128,255,128,1)",
            "rgba(128,255,128,1)",
            "rgba(128,255,128,1)",
            "rgba(128,255,128,1)",
            "rgba(128,255,128,1)",
            "rgba(128,255,128,1)",
            "rgba(128,255,128,1)",
            "rgba(128,255,128,1)",
            "rgba(128,255,128,1)",
            "rgba(128,255,128,1)"
          ],
          borderWidth : 1,
        },
        {
          label : "eau",
          data : this.props.data.eau.map(
            (e,i)=>(e*this.props.eauPrice).toFixed(2)
          ),
          backgroundColor : [
            "rgba(128,128,255,0.5)",
            "rgba(128,128,255,0.5)",
            "rgba(128,128,255,0.5)",
            "rgba(128,128,255,0.5)",
            "rgba(128,128,255,0.5)",
            "rgba(128,128,255,0.5)",
            "rgba(128,128,255,0.5)",
            "rgba(128,128,255,0.5)",
            "rgba(128,128,255,0.5)",
            "rgba(128,128,255,0.5)",
            "rgba(128,128,255,0.5)",
            "rgba(50,150,250,0.5)"
          ],
          borderColor : [
            "rgba(128,128,255,1)",
            "rgba(128,128,255,1)",
            "rgba(128,128,255,1)",
            "rgba(128,128,255,1)",
            "rgba(128,128,255,1)",
            "rgba(128,128,255,1)",
            "rgba(128,128,255,1)",
            "rgba(128,128,255,1)",
            "rgba(128,128,255,1)",
            "rgba(128,128,255,1)",
            "rgba(128,128,255,1)",
            "rgba(128,128,255,1)"
          ],
          borderWidth : 1,
        },
        {
          label : "gaz",
          data : this.props.data.gaz.map(
            (e,i)=>(e*this.props.gazPrice).toFixed(2)
          ),
          backgroundColor : [
            "rgba(255,128,128,0.5)",
            "rgba(255,128,128,0.5)",
            "rgba(255,128,128,0.5)",
            "rgba(255,128,128,0.5)",
            "rgba(255,128,128,0.5)",
            "rgba(255,128,128,0.5)",
            "rgba(255,128,128,0.5)",
            "rgba(255,128,128,0.5)",
            "rgba(255,128,128,0.5)",
            "rgba(255,128,128,0.5)",
            "rgba(255,128,128,0.5)",
            "rgba(255,128,128,0.5)"
          ],
          borderColor : [
            "rgba(255,128,128,1)",
            "rgba(255,128,128,1)",
            "rgba(255,128,128,1)",
            "rgba(255,128,128,1)",
            "rgba(255,128,128,1)",
            "rgba(255,128,128,1)",
            "rgba(255,128,128,1)",
            "rgba(255,128,128,1)",
            "rgba(255,128,128,1)",
            "rgba(255,128,128,1)",
            "rgba(255,128,128,1)",
            "rgba(255,128,128,1)"
          ],
          borderWidth : 1,
        }
     ]
   };
   let options = {
     title : {
       display : true,
       position : "top",
       text : "Graphe de la consommation",
       fontSize : 18,
       fontColor : "#111"
     },
     scales : {
       yAxes : [{
         ticks : {
           min : 0
         }
       }]
     }
   }

    let chart = new Chart(context,{
      type : 'bar',
      data : data,
      options : options
    });
    return (
      <div>
      </div>
    );
  }
}
