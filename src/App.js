import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store'

import Header from './common/header'
import AppStyle from './style'
import IcoStyle from './statics/icon/iconfont'
import Detail from './pages/detail'
import Home from './pages/home'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <AppStyle />
          <IcoStyle />
          <Header />
          <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/detail" component={Detail} />
          </BrowserRouter>
        </div>
      </Provider>
    )
  }
}

export default App
