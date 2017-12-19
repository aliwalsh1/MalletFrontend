import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './Store'
import App from './containers/app'

import './index.css'

const target = document.querySelector('#root')

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <App />
            </div>
        </ConnectedRouter>
    </Provider>,
    target
)

/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
    routing: routerReducer
})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// The example uses Main instead of App*/
