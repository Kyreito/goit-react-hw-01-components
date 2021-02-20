import React from 'react';
import Logo from './components/Logo';

import PaintingsList from './components/PaintingsList';
import Panel from './components/Panel';

import paintings from './paintings.json';



const App = () => {
  return (
    <div>
      <Panel title="Последние новости">
        <p>Привіт  n.k;jk;kj;j ;kh;hk;;kh ljnlnbghg чілдрен</p>
        <a href="">Read more</a>
      </Panel>

      <Panel>
        <p>Привіт  n.k;jk;kj;j ;kh;hk;;kh ljnlnbghg чілдрен</p>
        
      </Panel>

      {/* <h1>Главный компонент</h1> */}
      <Logo text="Главный компонент" />
      <PaintingsList paintings={paintings} />
    </div>
  )
}

export default App;