import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Home from './Components/Home'
import Layout from './Containers/Layout';
import Details from './Components/Details';

class App extends React.Component {
    render(){
      return (
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/details/:id" component={Details} />
          </Switch>
        </Layout>
      );
    }
}

export default App;
