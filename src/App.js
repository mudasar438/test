import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route,Routes, Link} from 'react-router-dom';
import Login from './component/login';
import Home from './component/home';
import About from './component/about';
import Content from './component/contact';
import Protected from './component/protected';
// hello this is changes for git
function App() {
  return (
    <>
    <div className="bg-red">
<Router>
  <Routes>
    <Route path="/" element={<Protected Component={Home}/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/about' element={<Protected Component={About}/>} />
    <Route path='/contact' element={<Content/>}/>
    
  </Routes>

</Router>

    </div>
    </>
  );
}

export default App;
