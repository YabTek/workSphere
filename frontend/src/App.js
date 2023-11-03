import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AuthPage from './pages/AuthPage';
import JobListPage from './pages/JobListPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<LandingPage/>} />
        <Route path = "/login" element = {<LoginPage/>} />
        <Route path = "/signup" element = {<SignupPage/>} />
        <Route path = "/choose" element = {<AuthPage/>} />
        <Route path = "/joblist" element = {<JobListPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
