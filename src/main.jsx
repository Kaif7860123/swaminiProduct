import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import { Provider } from 'react-redux'
import store from './Redux/Store/index.js'
// import { Provider } from 'react-redux'
// import store from './Redux/Slices'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Provider store={store}> */}
    <Provider store={store}>
    <App />
    </Provider>
    {/* </Provider> */}
  </StrictMode>,
)
