import React from 'react';
import ReactDOM from 'react-dom'
import Layout from './components/Layout/Layout'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './redux/reducers/rootReducer'
import thunk from 'redux-thunk' 
import { Provider } from 'react-redux'
import './index.scss'

// const dataBaseUrl = 'https://remember-5b76f-default-rtdb.firebaseio.com/'

const composeEnhancers =
  typeof window === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <Layout />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals()
