import React               from 'react'
import ReactDOM            from 'react-dom'
import { Drizzle} from 'drizzle';
import { Provider }        from 'react-redux'
import configureStore      from 'core/store/configureStore'
import App                 from 'containers/App'
import drizzleOptions      from 'configs/config-drizzle'
import { DrizzleProvider, DrizzleContext } from 'drizzle-react'

// 2. Setup the drizzle instance.
//const drizzleStore = generateStore(options);

const store = configureStore()
const drizzle = new Drizzle(drizzleOptions, store);

ReactDOM.render(
  <DrizzleContext.Provider drizzle={drizzle}>
    <Provider store={store}>
      <App />
    </Provider>
  </DrizzleContext.Provider>,
  document.getElementById('root')
)
