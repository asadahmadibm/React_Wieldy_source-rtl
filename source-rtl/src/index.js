import React from "react";
import ReactDOM from "react-dom";

import NextApp from './NextApp';
import registerServiceWorker from './registerServiceWorker';
// Add this import:
import {AppContainer} from 'react-hot-loader';
import axios from 'axios';

// axios.defaults.baseURL ='https://localhost:7012' //'https://swagger.tnlink.ir'//
// axios.defaults.headers.post['Contetnt-Type'] = 'application/json';
// axios.interceptors.request.use(function (config) {
//   var token = localStorage.getItem('authUser');
//   if (token == null) {
//     console.log("NotLogin");
//     // this.props.history.push('/signin');
   
//   }
//   config.headers.Authorization = "Bearer " + token;
//   return config;
// });


// Wrap the rendering in a function:
const render = Component => {
  ReactDOM.render(
    // Wrap App inside AppContainer
    <AppContainer>
      <NextApp/>
    </AppContainer>,
    document.getElementById('root')
  );
};

// Do this once
registerServiceWorker();

// Render once
render(NextApp);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./NextApp', () => {
    render(NextApp);
  });
}
