import './App.css';
import Login from './Components/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUp from './Components/SignUp';
import ForgetPassword from './Components/ForgetPassword';
import ResetPassword from './Components/ResetPassword.js'
import Sidebar from './App/Sidebar.jsx';
import Chat from './App/Chat.jsx';
import AboutPage from './App/AboutPage.jsx';
import Lobby from './App/Lobby.jsx';
function App() {
  return (
    <div className="App">
    <div>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<AboutPage />} />
        <Route exact path="/login" element={<Login />}/>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path='/login/forget-Password' element={<ForgetPassword />}></Route>
          <Route path="/reset-Password/:id/:token" element={<ResetPassword />}></Route>
          <Route path="/sidebar" element={<Sidebar />}></Route>
          <Route path='/chat/:roomId' element={<Chat />}></Route>
          <Route path='/lobby' element={<Lobby />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
