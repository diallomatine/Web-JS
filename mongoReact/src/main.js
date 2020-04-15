import React from 'react';
import ReactDOM from 'react-dom';
import Clients from '../components/clients';
import ClientsData from '../components/clientsdata';

const client = document.getElementById('client');
let data = document.getElementById('data');

const displayClients = (ev)=>{
  ev.preventDefault();
  document.getElementById('grapheContenaire').hidden = true;
  client.hidden = true;
  data.hidden = false;
  //data.addEventListener('click', displayDatas);
  ReactDOM.unmountComponentAtNode(document.getElementById('datas'));
  ReactDOM.render(<Clients/>, document.getElementById('datas'));
}

const displayDatas = (ev) =>{
  ev.preventDefault();
  client.hidden = false;
  data.hidden = true;
  document.getElementById('grapheContenaire').hidden = false;
  client.addEventListener('click', displayClients);
  ReactDOM.unmountComponentAtNode(document.getElementById('datas'));
  ReactDOM.render(<ClientsData/>, document.getElementById('datas'));
}

const setup = ()=>{
  client.hidden=true;
  data.addEventListener('click', displayDatas);
  ReactDOM.render(<Clients/>, document.getElementById('datas'));
}

window.addEventListener('DOMContentLoaded', setup);
