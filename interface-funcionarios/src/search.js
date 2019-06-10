import React from 'react'
import App from './App';



function searchingFor(searchTerm){
    return function(param){
      return (
        param.Idade == searchTerm ||
        param.Nome.toLowerCase().includes(searchTerm.toLowerCase()) || 
        param.Cargo.toLowerCase().includes(searchTerm.toLowerCase()) || 
        !searchTerm
      )
    }
}
  

class Search extends App {

    searchHandler = this.searchHandler.bind(this); 

    searchHandler(event){
        this.setState({searchTerm: event.target.value});
    }

    
  render() {
    const {funcionarios, searchTerm} = this.state;

    return (
    <div className="App">
        <h1>Busca de Funcionários por Requisito</h1>
            <form>
                Idade ou Nome ou Cargo:
                <input type="text" onChange={this.searchHandler}/>
            </form>
        <h1>Resultados da Busca</h1>
        <h2>Idade  -  Nome  -  Cargo</h2>
        {funcionarios.filter(searchingFor(searchTerm)).map(this.renderFuncionarios)}
    </div>
    )
  }
}


export default Search;