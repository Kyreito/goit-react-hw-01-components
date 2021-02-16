
import React from 'react';
import Painting from './components/Painting';
import paintings from './paintings.json';

console.log(paintings);



const App = () => {
  return <div>
    
    <h1>Главный компонент</h1>
    <Painting
      url={paintings[0].url}
      title={paintings[0].title}
      price={paintings[0].price}
      profileUrl={paintings[0].author.url}
      tag={paintings[0].author.tag}
      quantity={paintings[0].quantity}
    /> 
    
    <Painting
      url="https://cdn.pixabay.com/photo/2017/08/02/22/38/bird-2573779_1280.jpg"
      title="Bird. Animal art abstract"
      price="400"
      profileUrl="https://pixabay.com/users/ractapopulous-24766/"
      tag="Ractapopulous"
      quantity={paintings[2].quantity}
    />
    
  </div>
}

export default App;









/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
 */