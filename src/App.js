import './App.css';
import Calculator from './Calculator/Calculator';

function App() {
  return (
    <div className="background">
      <div className="top">
        <h1 className="title">Calculator.</h1>
      </div>
      <div className="center">
        <Calculator />
      </div>
      <div className="bottom">
        <span className="link">© {(new Date()).getFullYear()} Adrien N. F.</span>&nbsp;
        <a href="/homepage" className="link">Back to Homepage</a>
      </div>
    </div>
  );
}

export default App;
