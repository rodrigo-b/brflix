import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';


ReactDOM.render(
  //<React.StrictMode>
  //  <App />
  //</React.StrictMode>,
  <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/cadastro/video" component={CadastroVideo} />
        <Route path="/cadastro/categoria" component={CadastroCategoria} />
        <Route component={() => (<h2> Error 404, wrong path</h2>)} exact/>
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
