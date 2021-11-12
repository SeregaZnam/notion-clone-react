import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Page } from './components/Page';
import React from 'react';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
      <main style={{ display: 'flex', height: '100vh' }}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/:id">
              <Page />
            </Route>
          </Switch>
        </Router>
      </main>
    </>
  );
}

export default App;
