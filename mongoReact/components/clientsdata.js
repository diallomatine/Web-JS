import React from 'react';
import ReactDOM from 'react-dom';
import Ressource from './ressource';
import ClientData from './clientData';
import ClientDataByMonth from './clientDataByMonth';
import Clients from './clients'
import Graphe from './graphe';

export default class ClientsData extends React.Component {
  constructor(props) {
    super(props)
    this.state = {clients : [],
                  ressources : [],
                  clientActif : new Array(1),
                  electricitePrice : 0, eauPrice : 0, gazPrice : 0
                };
    // window.setInterval(()=>this.miseAjour(), 1000);
  }
  // verificlienst(){
  //   if (Clients.state.clients.length != this.state.clients.length) {
  //     this.setState({clients = Clients.state.clients.slice(0)})
  //   }
  // }

  miseAjour(){
    let requestOptions = { method : 'GET' };
    fetch('http://localhost:3000/client/', requestOptions)
        .then( response => response.json())
        .then( allClients => this.setState({
            clients : allClients,
            clientActif : [allClients[0]]
        }));
  }
  UNSAFE_componentWillMount() {
       let requestOptions = { method : 'GET' };
       fetch('http://localhost:3000/client/', requestOptions)
           .then( response => response.json())
           .then( allClients => this.setState({
               clients : allClients,
               clientActif : [allClients[0]]
           }));
      //Pour les ressources
      fetch('http://localhost:3000/ressources/', requestOptions)
          .then(response => response.json())
          .then((allRessources) => {
            this.setState({ressources : allRessources,
              electricitePrice :allRessources[0].price,
              gazPrice: allRessources[1].price,
              eauPrice : allRessources[2].price
            });
          });
  }

  handleRessourceValChanged(val,ressourceName, i,ressourceId){
    this.handleRessourcePricesChange(ressourceName, val);
    const prevRessources = this.state.ressources.slice(0);
    prevRessources[i].price = val;
    this.setState({ressources: prevRessources});

    let newRessource = prevRessources[i];
    let body = JSON.stringify(newRessource);
    let requestOptions = {
        method : 'PUT',
        headers : { "Content-Type": "application/json" },
        body : body
    }
    fetch('http://localhost:3000/ressources/'+ressourceId, requestOptions)
  }

   handleRessourcePricesChange(ressourceName, val){
     if (ressourceName == 'electricite'){
       this.setState({electricitePrice : val})
     }
     else if (ressourceName == 'eau'){
       this.setState({eauPrice : val})
     }
     else if (ressourceName == 'gaz') {
       this.setState({gazPrice : val})
     }
   }
   handleLineClicked(newElementActif){
     this.setState({clientActif : [newElementActif]});
   }
   render(){
     /*Pour gerer le cas où aucun client n'est inseré et c'est le cas au debut*/
     if (this.state.clients.length == 0) {
       document.getElementById('grapheContenaire').hidden = true;
       return <div><a href="http://localhost:3000/">Cliquer ici pour enregistrer un client d'abord </a></div>
     }
     document.getElementById('grapheContenaire').hidden = false;
     let lignesTab = this.state.clients.map(
       (e,i)=><ClientData
                data = {e}
                electricitePrice = {this.state.electricitePrice}
                eauPrice = {this.state.eauPrice}
                gazPrice = {this.state.gazPrice}
                onLineClicked = {()=>this.handleLineClicked(e)}
                key={i}
              />
     );
     let clientsDataByMonth = this.state.clientActif.map(
       (e,i)=>{
             let elts = <ClientDataByMonth
                data = {e}
                electricitePrice = {this.state.electricitePrice}
                eauPrice = {this.state.eauPrice}
                gazPrice = {this.state.gazPrice}
                key = {i}
              />;
            return elts
            });
      let graphe = this.state.clientActif.map(
        (e,i) => <Graphe
                  data = {e}
                  electricitePrice = {this.state.electricitePrice}
                  eauPrice = {this.state.eauPrice}
                  gazPrice = {this.state.gazPrice}
                  key = {i}
                  />
            );
      let ressources = this.state.ressources.map(
        (e,i)=> <Ressource
                  name = {e.ressource}
                  onRessourceValChanged = {(val, ressourceName)=>this.handleRessourceValChanged(val,ressourceName,i, e._id)}
                  value = {e.price}
                  key={e._id}
                />
          );

     return(
       <div>
          <div id="ressources">
          {ressources}
          </div>
         <table id="tab1">
           <tbody>
              {lignesTab}
           </tbody>
         </table>
         {clientsDataByMonth}
         {graphe}
      </div>
     );
   }
}
