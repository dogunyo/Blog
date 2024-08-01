import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Create from './components/Create.js';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home'; // Import Home component
import Navbar from './components/Navbar.js';

function App() {
  return (
    <Router>
      
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/Create">
              <Create/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

