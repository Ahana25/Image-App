import React from 'react';

import {Switch,Route} from 'react-router-dom'
import Login from './Components/Login';
import Home from './Components/Home';
import AddImage from './Components/AddImage';
import AllImage from './Components/AllImage';
import EditImage from './Components/EditImage';
import Error from './Components/Error';
// import Navbar from './Components/Navbar'
import Logout from './Components/Logout'
import Register from './Components/Register'
import Forum from './Components/Forum'


function App() {
  return (
    <div className="App">
    
<Switch>
<Route exact path='/' component={Login}/>
<Route exact path='/home' component={Home}/>
<Route exact path='/add' component={AddImage}/>
<Route exact path='/all' component={AllImage}/>
<Route exact path='/logout' component={Logout}/>
<Route exact path='/edit/:id' component={EditImage}/>
<Route exact path ='/register' component={Register}/>
<Route exact path='/forum' component={Forum}/>
<Route component={Error}/>
</Switch>
    </div>
  );
}

export default App;
