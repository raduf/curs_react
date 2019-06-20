import React, { Component } from 'react';
import ProjectList from './projects/ProjectList';
import './App.css';
import {Route} from 'react-router-dom'
import Dashboard from './dashboard/Dashboard';
import Profile from './profile/Profile';

class App extends Component {
  title = 'Simple Project Manager';

  profile = {
    name: 'James Hansen',
    bio: 'Great Great Cat'
  }

  render() {
    return (
      <main className="container pt-3">
        <div className="row justify-content-center">
          <h1 className="col-8 bg-primary p-3 text-white"> { this.title } </h1>
        </div>

          <Route path='/' exact component={ProjectList}/>
          <Route path='/dashboard' component={Dashboard}/>
          <Route path='/profile' render={ () => ( <Profile profile={this.profile} /> ) }/>
          {/* {<Route path='/profile' component={Profile}/>} */}
      </main>
    );
  }
}

export default App;
