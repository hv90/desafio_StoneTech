import React from 'react'
import App from './App';


class Insert extends App {
    addFuncionario = _ => {
        const {funcionario} = this.state;

        fetch(`${this.url}/funcionario?Idade=${funcionario.Idade}&Nome=${funcionario.Nome}&Cargo=${funcionario.Cargo}`,
            {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  }
            }        
        )
        .then(this.getFuncionarios)
        .catch(err => console.error(err))
    }
    
  render() {
    const {funcionarios, funcionario} = this.state;

    return (
    <div className="App">
        <h1>Funcionários</h1>
        {funcionarios.map(this.renderFuncionarios)}
        <h1>Inserir Novo Funcionário: </h1>        
        <h2>Idade - Nome - Cargo</h2>
        digitar:
        <input
            value={funcionario.Idade}
            onChange={e => this.setState({funcionario: {...funcionario, Idade: e.target.value}})}
        />
        <input
            value={funcionario.Nome}
            onChange={e => this.setState({funcionario: {...funcionario, Nome: e.target.value}})}
        />
        <input
            value={funcionario.Cargo}
            onChange={e => this.setState({funcionario: {...funcionario, Cargo: e.target.value}})}
        />
        <button onClick={this.addFuncionario}>Adicionar Funcionário</button>
    </div>
    )
  }
}


export default Insert;