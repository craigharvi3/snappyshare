import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import React from 'react';

import App from './components/App';
import Home from './components/Home';
import Board from './components/Board';
import store from './store';

const style = require('../sass/main.scss');

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
      </Route>
      <Route path="/board/:boardId" component={App}>
        <IndexRoute component={Board} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
