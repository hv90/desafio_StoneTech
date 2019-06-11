import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom' ;
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Delete from './delete';
import Insert from './insert';
import Update from './update';


import * as serviceWorker from './serviceWorker';

const routing = (

    <Router >
    <div >
        <nav className="navbar navbar-dark" style={{backgroundColor: "#000000"}}>
        <ul className="nav navbar-nav">
            <li>
                <Link to="/"  style={{color: 'white'}}>Search</Link>
            </li>
            <li>
                <Link to="/insert"  style={{color: 'white'}}>Insert</Link>
            </li>
            <li>
                <Link to="/delete"  style={{color: 'white'}}>Delete</Link>
            </li>
            <li>
                <Link to="/update"  style={{color: 'white'}}>Update</Link>
            </li>
        </ul>
        </nav>
        
        <Route exact path="/" component={App} />
        <Route path="/insert" component={Insert} />
        <Route path="/delete" component={Delete}/>
        <Route path="/update" component={Update}/>
        <Route path="/search" component={App}/>
        
    </div>
    </Router>
    
  )


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
