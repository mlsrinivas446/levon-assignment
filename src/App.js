import {BrowserRouter, Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm/LoginForm'
import Dashboard from './components/Dashboard/Dashboard'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  </BrowserRouter>
)

export default App
