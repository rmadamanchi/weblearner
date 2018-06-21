import React from "react";

export default class Splash extends React.Component {

  render() {
    return <div className="jumbotron">
      <h1 className="display-3">WebLearner</h1>

      <hr className="m-y-2"/>
      <p>Select a library</p>

      <p className="lead">
        {
          this.props.languages.map((language) => {
            return <a className="btn btn-primary btn-lg" href={'/#' + language} role="button">{language}</a>;
          })
        }
      </p>
    </div>

  }

}
