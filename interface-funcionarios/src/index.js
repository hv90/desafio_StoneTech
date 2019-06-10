import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom' ;
import './index.css';
import App from './App';
import Delete from './delete';
import Insert from './insert';
import Update from './update';
import Search from './search';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
      <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/insert">Insert</Link>
            </li>
            <li>
                <Link to="/delete">Delete</Link>
            </li>
            <li>
                <Link to="/update">Update</Link>
            </li>
            <li>
                <Link to="/search">Search</Link>
            </li>
        </ul>
        <Route exact path="/" component={App} />
        <Route path="/insert" component={Insert} />
        <Route path="/delete" component={Delete}/>
        <Route path="/update" component={Update}/>
        <Route path="/search" component={Search}/>
      </div>
    </Router>
  )


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
