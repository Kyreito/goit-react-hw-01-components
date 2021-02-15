
import React from 'react';
import Painting from './components/Painting';

// Painting 1

const painting = {
  "id": "id-1",
  "url": "https://i.ytimg.com/vi/etLl4gRbHfk/maxresdefault.jpg",
  "title": "Леді Бак",
  "price": 500,
  "author": {
    "tag": "Ractapopulous",
    "url": "https://pixabay.com/users/ractapopulous-24766/"
    },
  "quantity": 10
}; 

// Painting 2

const painting2 = {
    "id": "id-2",
    "url": "https://cdn.pixabay.com/photo/2017/08/02/22/38/bird-2573779_1280.jpg",
    "title": "Bird. Animal art abstract",
    "price": 400,
    "author": {
      "tag": "ractapopulous",
      "url": "https://pixabay.com/users/ractapopulous-24766/"
    },
    "quantity": 15
};

const App = () => {
  return <div>
    
    <h1>Главный компонент</h1>
    <Painting
      url="https://i.ytimg.com/vi/etLl4gRbHfk/maxresdefault.jpg"
      title="Леді Бак"
      price="500"
    /> 
    
    <Painting
      url="https://cdn.pixabay.com/photo/2017/08/02/22/38/bird-2573779_1280.jpg"
      title="Bird. Animal art abstract"
      price="400"
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