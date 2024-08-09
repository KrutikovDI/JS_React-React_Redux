// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import configureStore from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={configureStore()}>
    <App />
  </Provider>
)
