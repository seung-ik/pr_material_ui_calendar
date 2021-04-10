import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'
import loadable from '@loadable/component'

const Calender = loadable(()=> import("./components/Calendar"))

function App() {
  return (
    <Switch>
      <Redirect exact path="/" to="/calender" />
      <Route path="/calender" component={Calender}/>
    </Switch>
  );
}

export default App;
