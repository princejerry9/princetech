import './App.css';
import Navbar from "./components/Navbar"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Signup from './components/pages/Signup';
import Services from './components/pages/Services';

function App() {
  return (
    <>
    <Router>
      <Navbar
        logo="Pjtech"
        text1="Home"
        text2="About"
        text3="Contact"
        text4="Services"
        text5="Signup"
      />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' exact component={About}/>
        <Route path='/contact' exact component={Contact}/>
        <Route path='/services' exact component={Services}/>
        <Route path='/signup' exact component={Signup}/>
      </Switch>
    </Router>
   </>
  );
}

export default App;
