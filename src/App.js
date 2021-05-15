
import 'bootstrap/dist/css/bootstrap.min.css';

import "react-datepicker/dist/react-datepicker.css";
import './App.scss';
import Header  from './components/header'
import { BrowserRouter as Router} from "react-router-dom";
import  Routes  from './routes';

function App() {
  return (
    <Router>
    <Header />
    <div className="App">
        <div className="">
            <Routes/>
        </div>
    </div>
    </Router>
  );
}

export default App;
