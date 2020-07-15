import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

import GlobalStyle from './styles/GlobalStyle'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
