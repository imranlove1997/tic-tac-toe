
import logo from './logo.svg';
import Game from './Game.js';

const App = () => {
    return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            <Game></Game>
          </p>
        </div>
      );
}

export default App;