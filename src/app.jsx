import React from 'react'
import { render } from 'react-dom'
import { Provider  } from 'react-redux'
import route from './config/route'
import configureStore from './store/configStore'

const store=configureStore();

render(
    <Provider store={store}>
        {route}
    </Provider>,
    document.getElementById('root')
)