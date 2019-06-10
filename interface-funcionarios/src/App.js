import React from 'react';
import './App.css';

class App extends React.Component{
  url = 'http://localhost:4000';

  state = {
    funcionarios: [],
    funcionario: {
      Id: Number,
      Idade: Number,
      Nome: String,
      Cargo: String
    },
    searchTerm: ''
  }

  componentDidMount(){
    this.getFuncionarios()
  }

  getFuncionarios = _ => {    
    fetch(`${this.url}/funcionarios`)      
      .then(response => response.json())
      .then(response => this.setState({ funcionarios: response.data}))
      .catch(err => console.error(err))
  }
 
  renderFuncionarios = ({Id, Idade, Nome, Cargo}) => <div key={Id}>{Nome} | {Idade} |  {Cargo}</div>

  render(){
    const {funcionarios, funcionario, searchTerm} = this.state;

    return (
      <div className="App">
      <h1>Home</h1>
      <h2>Funcionários</h2>
      <h3>Nome  -  Idade   -  Cargo</h3>
      {funcionarios.map(this.renderFuncionarios)}
    </div> 
   );
  }

}

export default App;
