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
    const {funcionarios, funcionario} = this.state;

    return (
    <div className="App">
      <h1>Funcionários</h1>
      {funcionarios.map(this.renderFuncionarios)}
      <h1>Excluir Funcionário: </h1>digitar Id:
      <input
        value={funcionario.Id}
        onChange={e => this.setState({funcionario: {...funcionario, Id: e.target.value}})}
      />
      <button onClick={this.delFuncionario}>Deletar Funcionário</button>
    </div>
    )
  }
}


export default Delete;