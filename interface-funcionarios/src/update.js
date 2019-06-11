import React from 'react'
import App from './App';



class Update extends App {
    
    idHandler = this.idHandler.bind(this);

    atributoHandler = this.atributoHandler.bind(this);

    valorHandler = this.valorHandler.bind(this);

    idHandler (e){        
        this.setState({id: e.target.value});
    }

    atributoHandler(e){
        this.setState({atributo: e.target.value});
    }

    valorHandler(e){
        this.setState({valor: e.target.value});
    }     
   
    updFuncionario =  _ => {   
        const {id, atributo, valor} = this.state; 
        fetch(`${this.url}/funcionario?Id=${id}&Atributo=${atributo}&Valor=${valor}`,{
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              }
        })
            .then(this.getFuncionarios)
            .catch(err => console.error(err))
    }


    
  render() {
    const {funcionarios} = this.state;

    return (
    <div className="App">
    <div className="page-header">
        <h1>Editar Informações do Funcionário: </h1>
    </div>
    
    <div className="container">
          <div className="row">
            <form className="form-inline">
                <div className="col-sm-3">
                    <div className="form-group">
                        <label><h4>Id:</h4></label>
                        <input type="number" placeholder="ex: 1" className="form-control"
                            onChange={e =>  this.idHandler(e)}
                        />
                    </div> 
                </div>
                
                <div className="col-sm-3">
                    <div className="form-group">
                        <label><h4>Atributo:</h4></label>
                        <select  className="form-control" onChange={e => this.atributoHandler(e)}>
                            <option value="">--Selecione--</option>
                            <option >Idade</option>
                            <option >Nome</option>
                            <option >Cargo</option>
                        </select>
                    </div>
                </div>

                <div className="col-sm-3">
                    <div className="form-group">
                        <label><h4>Valor:</h4></label>
                        <input type="text" className="form-control" placeholder="Valor para sobrescrever"
                        onChange={e =>  this.valorHandler(e)}
                        />
                    </div>
                </div>
                
                <div className="col-sm-1">
                    <button type="button" style={{backgroundColor: "#00002B", color: "#FFFFFF"}} className="btn btn-default" 
                    onClick={this.updFuncionario}>Atualizar Funcionário</button>
                </div>

                

                
        
            </form>
        </div>
    </div>
        
        
        
        <form>
            
       </form>
        
        

        

        
          
       
        
     
        
        
        
    </div>
    )
  }
}


export default Update;


