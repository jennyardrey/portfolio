import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Biography from './components/Biography';
import ContactForm from './components/ContactForm'
import { Route, Switch } from 'react-router-dom';
import Projects from './components/Projects';


function App() {
  return (
    <div className="App">
     <Navbar />
		 <Switch>
			 <Route 
			 exact path="/"
			 component={Biography}
			 />
			 <Route exact path="/projects" component={Projects} />
			 <Route exact path="/contact" component={ContactForm} />
		 </Switch>
    </div>
  );
}

export default App;
