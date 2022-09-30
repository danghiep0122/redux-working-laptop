import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

import store from './app/store'
import App from './App'

let persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
