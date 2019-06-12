import React from 'react'
import App from './App';

class Delete extends App {
  delFuncionario = _ => {
    const {funcionario} = this.state
    fetch(`${this.url}/funcionario?Id=${funcionario.Id}`,
        {
            method: 'delete',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                }
        })
      .then(this.getFuncionarios)
      .catch(err => console.error(err))
  }
  
  render() {
    const { funcionario} = this.state;

    return (
    <div className="App">
      <div className="page-header">
      <h1>Excluir Funcionário</h1>
      </div>
      <div className="container">
          <div className="row">
            <form className="form-inline">

              <div className="form-group">
                <label><h4>Id:</h4></label>&nbsp;&nbsp;&nbsp;
                  <input
                    type = "number" placeholder = "Id do Funcionário" className="form-control"
                    onChange={e => this.setState({funcionario: {...funcionario, Id: e.target.value}})}
                  />
              </div>
              
              <button type="button" style={{backgroundColor: "#00002B", color: "#FFFFFF"}} className="btn btn-default" 
                  onClick={this.delFuncionario}>
                  Deletar Funcionário
              </button> 

            </form>
          </div>
      </div>      
    </div>
    )
  }
}


export default Delete;