import React from 'react';
import {Switch, Route} from 'react-router-dom';

// Pages
import home from './pages/home';
import profile from './pages/profile';
import login from './pages/login';
import signup from './pages/signup';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path={'/'} component={home}/>
          <Route exact path={'/profile'} component={profile}/>
          <Route exact path={'/login'} component={login}/>
          <Route exact path={'/signup'} component={signup}/>
        </Switch>
    </div>
  );
}

export default App;
