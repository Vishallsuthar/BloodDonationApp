
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import './App.scss';
import Header from './components/header'
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './routes';
import { firebaseConfig } from './appConfig';
import firebase from 'firebase/app';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    // initialize the firebase application 
    firebase.initializeApp(firebaseConfig);
  }, []);

  return (
    <Router>
      <Header />
      <div className="App">
        <div className="">
          <Routes />
        </div>
      </div>
    </Router>
  );
}

export default App;
