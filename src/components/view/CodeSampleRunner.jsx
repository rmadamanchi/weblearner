import React from "react";
import CodeEvaluator from "../CodeEvaluator.jsx";

import CodeMirror from "codemirror";
import "codemirror/mode/javascript/javascript";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/neat.css";

import beautify from 'js-beautify';

import {Grid, Row, Col, Label} from 'react-bootstrap/lib';

export default class CodeSampleRunner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {code: props.code, result: ''};
  }

  run() {
    let code = this._editor.getValue();

    this.setState({result: ''});
    let result = CodeEvaluator.eval(this.props.type, code, (log) => {
      this.setState({result: this.state.result + log + "<br/>"});

    });
  }

  beautifyEditor() {
    let code = this._editor.getValue();
    code = this.beautify(code);
    this._editor.setValue(code);
    return code;
  }

  beautify(code) {
    return beautify(code, {indent_size: 0, indent_level: 0});
  }

  componentDidMount() {
    this._editor = CodeMirror.fromTextArea(this._codeTextArea, {
      lineNumbers: true,
      mode: "javascript",
      theme: "neat",
      extraKeys: {
        'Ctrl-F': () => {
          this.beautifyEditor();
        },
        'Ctrl-Enter': () => {
          this.run();
        }
      }
    });
  }


  render() {
    return (<Grid className="code-sample-container" fluid={true}>
      <Row>
        <Col md={8}>
          <div>
            <h4><Label bsStyle="info">{this.props.type}</Label>&nbsp;
              <small>
                <small><i>Run: Ctrl-Enter | Format: Ctrl+F</i>
                </small>
              </small>
            </h4>
          </div>
          <textarea type="text"
                    defaultValue={this.props.type != 'ES7' ? this.beautify(this.state.code): this.state.code}
                    ref={(ref) => this._codeTextArea = ref}/><br/>
        </Col>
        <Col md={4} style={{marginTop: '40px'}}>

          <div className="code-result" dangerouslySetInnerHTML={{__html: this.state.result}}></div>
        </Col>
      </Row>
    </Grid>)
  }
}