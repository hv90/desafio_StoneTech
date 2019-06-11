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
    const {funcionario} = this.state;

    return (
    <div className="App ">
        <div className="page-header" >
          <h1>Inserir Novo Funcionário</h1> 
        </div>
        
        <div className="container">
          <div className="row">
            <form className="form-inline">

                <div className="col-sm-3">
                    <div className="form-group">
                        <label><h4>Idade:</h4></label>&nbsp;&nbsp;&nbsp;
                            <input type = "number" placeholder="ex: 2" className="form-control"
                                onChange={e => this.setState({funcionario: {...funcionario, Idade: e.target.value}})}
                            />
                    </div>
                </div>
                
                <div className="col-sm-3">
                    <div className="form-group">
                        <label for="Nome"><h4>Nome:</h4></label>&nbsp;&nbsp;&nbsp;
                        <input type = "text" placeholder="ex: João da Silva" className="form-control"
                        onChange={e => this.setState({funcionario: {...funcionario, Nome: e.target.value}})}
                        />
                    </div>
                </div>
                                              
                <div className="col-sm-3 ">
                    <div className="form-group">                    
                        <label for="Cargo"><h4>Cargo:</h4></label>&nbsp;&nbsp;&nbsp;
                        <input type = "text" placeholder="ex: Professor" className="form-control"
                            onChange={e => this.setState({funcionario: {...funcionario, Cargo: e.target.value}})}
                        />
                    </div>                
                </div>

                <div className="col-sm-1">
                    <button type="button" style={{backgroundColor: "#00002B", color: "#FFFFFF"}} className="btn btn-default" 
                        onClick={this.addFuncionario}>
                            <h6>Adicionar</h6>
                    </button>
                </div>
                    
             
                 
            </form>        
          </div>     
        </div>               
    </div>
        
    
    )
  }
}


export default Insert;