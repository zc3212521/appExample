import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader' //热更替相关
import App from './views/App.jsx'

const root = document.getElementById('root')
const render = (Component,renderMethod="render") =>{
    ReactDOM[renderMethod](
        <AppContainer>
            <Component />
        </AppContainer>,
        root
    );
}

render(App)

if(module.hot){
    module.hot.accept('./App.jsx', ()=>{
        const NextApp = require('./views/App.jsx').default
        render(NextApp, 'hydrate')
    })
}