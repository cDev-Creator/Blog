import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
          <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            {/* Route perameter based on blog id */}
            <Route path="/blogs/:blogId">
              <BlogDetails />
            </Route>
           {/*  asterick is to catch any other route so if user goes to a url 
           that does not exist they will be send to the page not found page */}
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;