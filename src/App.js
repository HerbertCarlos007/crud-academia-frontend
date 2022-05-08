import { useNavigate } from 'react-router-dom'
import RegisterStudent from './components/RegisterStudent'
import HomePage from './components/HomePage';
import Training from './components/Training';
import Students from './components/Students';
import { BrowserRouter as Router, Link, Routes, Route, Switch } from "react-router-dom";
import './App.css';

function App() {


  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage/>}></Route>
          <Route path='/students' element={<Students/>}></Route>
          <Route path='/registerStudent' element={<RegisterStudent/>}></Route>
          <Route path='/training' element={<Training/>}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
