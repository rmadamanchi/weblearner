import React from "react";
import {ListGroup, ListGroupItem} from 'react-bootstrap/lib';

export default class LibraryPage extends React.Component {

  render() {
    return <ListGroup>
      {
        this.props.chapters.map((chapter) => {
          return (
              <ListGroupItem key={this.props.library + "-" + chapter}
                             href={"#/" + this.props.library + "/" + chapter}
                             active={chapter == this.props.selectedChapter}>
                {chapter}
              </ListGroupItem>
          );
        })
      }
    </ListGroup>


  }

}
