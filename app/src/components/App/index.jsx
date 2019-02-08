import React from 'react';
import {Route, Switch} from "react-router-dom";
import {ConnectedRouter} from 'connected-react-router'
import HomePage from '../../containers/HomePage'
import FormPage from '../../containers/FormPage'
import "antd/dist/antd.css";
import './style.scss'

const App = ({history}) => (
  <div className="App">
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/create" component={FormPage}/>
        <Route path="/edit/:id" component={FormPage}/>
      </Switch>
    </ConnectedRouter>
  </div>
);
export default App;


