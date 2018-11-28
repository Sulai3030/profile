import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import Navbar from "./Navbar";
import Footer from "./Footer";
import AboutMe from "./AboutMe";
import Projects from "./Projects";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path={`/`} component={AboutMe}/>  
          <Route path={`/projects`} component={Projects}/>
          <Route path={`/projects`} component={Contact Me}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
