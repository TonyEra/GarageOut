import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';

function App() {
  return (
     <div className="App">
        <header className="App-header">
          <Header />
          <Nav/>
          <a 
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn react
            </a>
        </header>
     </div>
  );
}

export default App;
