import './App.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Navibar from './components/Navibar';
import ProfileView from './components/pages/ProfileView';

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

            <ProfileView/>
     </div>
  );
}

export default App;
