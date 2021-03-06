import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Tabs from './components/Navbar/Tabs'
import Home from './pages/Homepage/Home';
import About from './pages/About/About';

function App() {
  return (
    <div className="App">
        <Tabs/>
        <Router>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/recruitment">
              {/* insert recruitment page component(s) here */}
              <h1>Recruitment</h1>
            </Route>
            <Route path="/philanthropy">
              {/* insert philanthropy page component(s) here */}
              <h1>Philanthropy</h1>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
