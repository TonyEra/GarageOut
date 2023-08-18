import './App.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Navibar from './components/Navibar';
import Login from './components/pages/Login';

function App() {
  return (
     <div className="App">
          <Header />

          <Router>
          <Navibar/>
            <Routes>
              <Route exact path="/" element={<Header />} />
            </Routes>
          </Router>


          <a 
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn react
            </a>

            <Login/>
     </div>
  );
}

export default App;
