import React, { Component } from 'react';
import ProjectList from './projects/ProjectList';
import { Route } from 'react-router-dom';
import './App.css';
import Dashboard from './dashboard/Dashboard';
import Profile from './profile/Profile';
import Navbar from './layout/Navbar';

class App extends Component {
  title = 'Simple Project Manager';

  profile = {
    name: 'James Hansen',
    bio: 'Great great cat'
  }

  render() {
    return (
      <main className="container pt-3">
        <div className="row justify-content-center">
          <h1 className="col-12 bg-primary p-3 text-white"> <Navbar title={this.title} name={this.profile.name}/> </h1>
        </div>
          <Route path="/" exact component={ProjectList} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/profile" exact render={() => (<Profile profile={this.profile} />) } />
      </main>
    );
  }
}

export default App;
