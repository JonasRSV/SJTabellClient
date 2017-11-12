import 'react-hot-loader/patch';
import React from 'react';
import ReactDom from 'react-dom';
import MAIN_COMPONENT from './components/MAIN_COMPONENT.jsx';
import { AppContainer } from 'react-hot-loader'


const render = Component => {
    ReactDom.render(
        <AppContainer>
            <Component />
        </AppContainer>
    , document.getElementById("app"))
}

render(MAIN_COMPONENT);

if (module.hot) {
    module.hot.accept('./components/MAIN_COMPONENT.jsx', () => {
        const NextApp = require('./components/MAIN_COMPONENT.jsx').default;
        render(NextApp);
    });
}