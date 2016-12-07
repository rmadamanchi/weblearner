import React from "react";
import LearningLibrary from "./LearningLibrary.jsx";
import SplashPage from "./view/SplashPage.jsx";
import LibraryPage from "./view/LibraryPage.jsx";


export default class App extends React.Component {

  render() {
    let route = this.props.route;
    let library = LearningLibrary.get();

    if (!route) {
      return <div className="container-fluid">
        <SplashPage languages={_.keys(library)}/>
      </div>
    }

    if (route.length == 1) {
      window.location.hash = "#/" + route[0] + "/" + _.keys(library[route[0]])[0];
      return null;
    }


    if (route.length == 2) {
      return <LibraryPage library={library[route[0]]} name={route[0]} chapter={route[1]}/>
    }

  }
}