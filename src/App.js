import logo from './logo.svg';
import './App.css';


function App() {
  const deneme =  "REACT"
  return (
     
    <div className="App">
      {/* JSX- HTML ILE JS BIRLESMIS HALI */}
      <h2 style={{color:"red"}}>HOSGELDIN ENISA</h2>
      <p className="par">{deneme}</p>

      {/* <header className="App-header">
 
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
