import React from 'react';
import './App.css';

function search(searchTerm, atributo){
  return(
      function (param){
          switch(atributo){

              case "Idade":
                  return(
                      param.Idade == searchTerm
                  );
          
              case "Nome":
                  return(
                          param.Nome.toLowerCase().includes(searchTerm.toLowerCase())
                  );                                      

              case "Cargo":
                  return (
                      param.Cargo.toLowerCase().includes(searchTerm.toLowerCase())
                  );                    
              
              default: 
                      return(true);
          }            
      }
  )
  
}

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
    searchTerm: '',
    atributo: '',
    valor: ''
  }

  valorHandler = this.valorHandler.bind(this);

  requisitoHandler = this.requisitoHandler.bind(this);
  
  valorHandler(event){
      this.setState({searchTerm: event.target.value});
  }

  requisitoHandler(event){
      this.setState({atributo: event.target.value});
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
    const {funcionarios, searchTerm, atributo} = this.state;

    return (
      <div className="App"  > 
         

        <div className="container" >
        <div className="page-header" >
            <h1>Busca por Funcionários</h1>
        </div> 
            <div className="row">
                <form className="form-inline">

                    <div className="col-sm-12">
                        <div className="form-group">
                            <label><h4>Atributo:&nbsp;</h4></label>
                            <select className="form-control" onChange={e => this.requisitoHandler(e)}>
                                <option>--Selecione--</option>
                                <option>Idade</option>
                                <option>Nome</option>
                                <option>Cargo</option>
                            </select>
                        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    
                        <div className="form-group">
                            <label><h4>Característica:&nbsp;</h4></label>
                            <input type="text" className="form-control" placeholder="Característica Desejada"
                                onChange={e => this.valorHandler(e)}
                            /> 
                        </div>
                    </div>
                </form>
            </div>

            <div className="row">
                <h1>Resultados da Busca</h1>
                <h2>Idade  -  Nome  -  Cargo</h2>
                {funcionarios.filter(search(searchTerm, atributo)).map(this.renderFuncionarios)}
            </div>
            <div className="row"><br/><br/><br/><br/><br/><br/></div>
        </div>      
    </div> 
   );
  }

}

export default App;
