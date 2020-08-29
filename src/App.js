import React from 'react';
import PageWrapper from './components/PageWrapper';
import Home from './components/pages/Home';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

function App() {
  return (
    <div>
        <Router>
      <PageWrapper>
          <Route exact path='/' component={Home}/>
      </PageWrapper>
        </Router>
     
    </div>
  );
}

export default App;
