import React from 'react';

import './App.css';
import './styles/sb-admin-2.min.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import { Login } from './pages/Account';
import { Admin } from './pages/Admin';
import { AccountRoute } from './components/AccountRoute';

function App() {
  return (
    <div className="App" id="wrapper">
      <Router>
        <Switch>
          <AccountRoute>
            <Login />
          </AccountRoute>
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
