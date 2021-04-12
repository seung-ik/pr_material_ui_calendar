import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'
import loadable from '@loadable/component'

const Calendar = loadable(()=> import("./components/Calendar"))
const Main = loadable(()=> import("./components/Main"))

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route path="/calendar" component={Calendar}/>
    </Switch>
  );
}

export default App;
