import React, { Component } from 'react'
import Header from './common/header'
import store from './store'
import { Provider } from 'react-redux'

import AppStyle from './style'
import IcoStyle from './statics/icon/iconfont'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <AppStyle />
          <IcoStyle />
          <Header />
        </div>
      </Provider>
    )
  }
}

export default App
