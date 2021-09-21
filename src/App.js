import './App.css';
import {Route,Switch } from 'react-router-dom'
import Homepage from './pages/Homepage';
import SigninPage from './pages/SigninPage';


function App() {
  return (
    <Switch>
      <Route path='/' component={Homepage} exact>
      <Homepage />
      </Route>
      <Route path='/signin' component={SigninPage} >
      <SigninPage />
      </Route>
    </Switch>
  );
}

export default App;
