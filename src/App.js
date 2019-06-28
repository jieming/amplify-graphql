import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import MatterList from './matter/MatterList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <MatterList />
      </body>
    </div>
  );
}

export default withAuthenticator(App, true);
