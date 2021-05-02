import './App.css';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import Home from './components/Home';
import About from './components/About';
import Details from './components/Details';
import Services from './components/Services';
import User from './components/User';
import Contact from './components/Contact';
import Error from './components/Error';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
  
     <div className="App">
       <Navbar/>
       <div className="container">
       <Switch>
       <Route exact path="/" component={Home}/>
       {/* for passing props */}
       <Route exact path="/about" component={()=> <About/> }/>
       <Route exact path="/services" render={()=><Services/>}/>
       <Route exact path="/posts" component={Posts}/>
       <Route exact path="/posts/:id" component={Details}/>
       <Route exact path="/contact" component={Contact}/>
       <Route  component={Error}/>
       <Route exact path="/user/:fname/:lname" component={User}/>
       </Switch>
       </div>
       
    </div>
    </BrowserRouter>
   
  );
}

export default App;
