import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { store } from './redux/store.ts'
import { Provider } from 'react-redux'
// provider is used to provide the store access to the component
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* we are providing the store access to the app component using provider */}
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>,
)
