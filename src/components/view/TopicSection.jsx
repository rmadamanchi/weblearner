import React from "react";
import CodeSampleRunner from './CodeSampleRunner.jsx';
import {Grid, Row, Col} from 'react-bootstrap/lib';

export default class TopicSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div><h3>{this.props.title}</h3>
      {this.props.chunks.map((chunk) => {
        return (chunk.type === 'text') ?  <p>{chunk.value}</p> : <CodeSampleRunner type={chunk.type} code={chunk.value}/> ;
      })
      } </div>);
  }


}