import {Route, BrowserRouter, Routes} from 'react-router-dom'

import LoginForm from './components/LoginForm/LoginForm.js'
import Home from './components/Home/Home.js'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<LoginForm />} />
      <Route exact path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
)

export default App
