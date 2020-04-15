import React from 'react';
import ReactDOM from 'react-dom';
import NewClient from './newclient';
import Client from './client';
import ClientsData from './clientsdata';

export default class Clients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clients : []};
  }
  UNSAFE_componentWillMount() {
       let requestOptions = { method : 'GET' };
       fetch('http://localhost:3000/client/', requestOptions)
           .then( response => response.json())
           .then( allClients => this.setState({
               clients : allClients
           }));
   }

   createClientRessource(){
     let tab = new Array(12).fill(0).map(
       (e,i)=> Math.floor(Math.random()*(15 - 4) + 4)
     );
     return tab;
   }

   handleButtonCreateClicked(clientname){
     const newclient = {clientname : clientname,
                         electricite : this.createClientRessource(),
                         gaz : this.createClientRessource(),
                         eau : this.createClientRessource(),
                       };
     let body = JSON.stringify(newclient);
     let requestOptions = {
         method : 'POST',
         headers : { "Content-Type": "application/json" },
         body : body
     }
     fetch('http://localhost:3000/client/', requestOptions)
         .then( response => response.json())
         .then((ressource)=>{
           const prevClients = this.state.clients.slice(0);
           prevClients.push(ressource);
           this.setState({clients : prevClients});
         });

   }
   deleteElementInData(elem){
     let requestOptions = { method : 'DELETE' };
     fetch('http://localhost:3000/client/'+elem, requestOptions)
   }

   handleStarClicked(i,elem){
     const prevClients = this.state.clients.slice(0);
     prevClients.splice(i,1);
     this.setState({clients : prevClients});
     this.deleteElementInData(elem);
   }
  render(){
    let clients = this.state.clients.map(
      (e,i)=> <Client
                name = {e.clientname}
                onDeleteClicked = {()=>this.handleStarClicked(i, e._id)}
                key={e._id}
              />
    );
    return (
      <div>
        <NewClient OnButtonCreateClicked={(clientname)=>this.handleButtonCreateClicked(clientname)}/>
        {clients}
      </div>
    );
  }

}
