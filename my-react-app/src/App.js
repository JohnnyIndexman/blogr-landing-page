import "./index.css";
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Create from './Create';
import Contact from "./Contact";
import BlogDetails from "./BlogDetails";

function App() {
  
  return (
    <Router>
      <div className="App" style={{maxWidth:"1100px",display:"block", margin:"0px auto"}}>
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path = '/'>
              <Home />
            </Route>
            <Route exact path = '/create'>
              <Create />
            </Route>
            <Route exact path = '/contact'>
              <Contact />
            </Route> 
            <Route exact path = '/blogs/:id'>
              <BlogDetails/>
            </Route>   
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
