import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AuthPage from './pages/AuthPage';
import JobListPage from './pages/JobListPage';
import JobDetailPage from './pages/JobDetailPage';
import ClientPage from './pages/ClientPage';
import ClientProfilePage from './pages/ClientProfilePage';
import freelancerProfilePage from './pages/freelancerProfilePage';
import ForgetPasswordPage from './pages/forgetPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<LandingPage/>} />
        <Route path = "/login" element = {<LoginPage/>} />
        <Route path = "/signup/:role" element = {<SignupPage/>} />
        <Route path = "/resetPassword/:token" element = {<ResetPasswordPage/>} />
        <Route path = "/chooseAccount" element = {<AuthPage/>} />
        <Route path = "/forgetPassword" element = {<ForgetPasswordPage/>} />
        <Route path = "/joblist" element = {<JobListPage/>} />
        <Route path = "/jobdetail" element = {<JobDetailPage/>} />
        <Route path = "/client" element = {<ClientPage/>} />
        <Route path = "/clientprofile" element = {<ClientProfilePage/>} />
        <Route path = "/freelancer" element = {<freelancerProfilePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
