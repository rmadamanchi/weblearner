import 'script!../node_modules/babel-standalone/babel.js';
import 'script!../node_modules/babel-polyfill/dist/polyfill.js';
import 'script!../node_modules/typescript/lib/typescriptServices.js';

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import "./styles.scss";

function _windowHashChanged() {
  var location = window.location.hash.replace(/^#\/?|\/$/g, '').split('/');
  if (location.length == 1 && location[0] === "") {
    location = null;
  }
  console.log(location);
  var app = <App route={location}/>;
  ReactDOM.render(app, document.getElementById('app'));
}

_windowHashChanged();
window.addEventListener('hashchange', _windowHashChanged, false);
