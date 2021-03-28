import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Tabs from './components/Navbar/Tabs'

function App() {
  return (
    <div className="App">
        <Tabs/>
        <Router>
          <Route path="/home">
            {/* insert home page component(s) here */}
            <h1>Home</h1>
          </Route>
          <Route path="/about">
            {/* insert about page component(s) here */}
            <h1>About</h1>
          </Route>
          <Route path="/recruitment">
            {/* insert recruitment page component(s) here */}
            <h1>Recruitment</h1>
          </Route>
          <Route path="/philanthropy">
            {/* insert philanthropy page component(s) here */}
            <h1>Philanthropy</h1>
          </Route>
        </Router>
    </div>
  );
}

export default App;
