import React from "react";
import LibraryPageLeftNav from "./LibraryPageLeftNav.jsx";
import TopicSection from "./TopicSection.jsx";
import {Grid, Row, Col} from 'react-bootstrap/lib';

export default class LibraryPage extends React.Component {

  render() {
    let topics = this.props.library[this.props.chapter];

    let topicSections = [];

    Object.keys(topics).forEach((topic) => {
      topicSections.push(<TopicSection title={topic.replace('.js', '').replace('.ts', '')} chunks={topics[topic]}
                                       key={topic}/>);
    });

    return (
        <Grid fluid={true}>
          <h1>{this.props.name}</h1>
          <Row>
            <Col lg={2}>
              <LibraryPageLeftNav library={this.props.name}
                                  chapters={_.keys(this.props.library)}
                                  selectedChapter={this.props.chapter}/>
            </Col>
            <Col lg={10}>
              {topicSections}
            </Col>
          </Row>
        </Grid>);
  }
}
