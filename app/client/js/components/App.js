import React from 'react';
import { connect } from 'react-redux';
import Header from './Modules/Header';

const uuidv1 = require('uuid/v1');
const AjaxPromise = require('ajax-promise');

const mapStateToProps = state => ({
  appName: state.appName,
  links: state.links
});

class App extends React.Component {
  publish() {
    let boardId = uuidv1();
    this.props.links.map((link) => {
      link.boardId = boardId;
    });

    AjaxPromise
      .post('/api/board', {data: this.props.links})
      .then(function (response) {
        window.location.href = `/board/${boardId}`;
      });
  }

  render() {
    return (
      <div>
        <Header appName={this.props.appName} links={this.props.links} publish={this.publish.bind(this)} />
        {this.props.children}
      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, () => ({}) )(App);
