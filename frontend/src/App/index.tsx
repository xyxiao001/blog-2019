import React from 'react';

import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import Home from '../Home/index'

import './index.scss';

const App: React.FC = () => {
  return (
    <BrowserRouter basename="/">
      <div className="blog">
        <Route exact path="/" component={Home} />
        {/* 没有匹配的路由导航到首页 */}
        <Route render={() => <Redirect to="/" />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
