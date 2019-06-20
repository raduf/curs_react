import React, { Component } from 'react';
import ProjectList from './projects/ProjectList';
import { Route } from 'react-router-dom';
import './App.css';
import Navbar from './layout/Navbar';
import Dashboard from './dashboard/Dashboard';
import Profile from './profile/Profile';
import TaskLayout from './tasks/TaskLayout';

class App extends Component {
  title = 'Simple Project Manager';

  profile = {
    name: 'James Hansen',
    bio: 'Great great cat'
  }

  render() {
    return (
      <main className="container pt-3">
          <Navbar title={this.title} />
        
          <Route path="/" exact component={ProjectList} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/profile" exact render={() => (<Profile profile={this.profile} />) } />
          <Route path="/tasks" component={TaskLayout}  />
      </main>
    );
  }
}

export default App;
