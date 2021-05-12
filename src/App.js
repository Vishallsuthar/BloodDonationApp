import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import "react-datepicker/dist/react-datepicker.css";
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import  Routes  from './routes';

function App() {
  return (
    <Router>
    <div className="App">
        <div className="">
            <Routes/>
        </div>
    </div>
    </Router>
  );
}

export default App;
