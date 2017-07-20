import React from 'react';
import data from '../../data';
import { connect } from 'react-redux';
import LinkList from '../Modules/LinkList';

const mapStateToProps = state => ({
  appName: state.appName,
  links: state.links,
  link: state.link
});

const mapDispatchToProps = dispatch => ({
  onLoad: (payload) => dispatch({type: 'HOME_PAGE_LOADED', payload})
});

class Board extends React.Component {
  componentWillMount() {
    this.props.onLoad(data.Links.all(this.props.params.boardId));
  }

  render() {
    return (
      <div className="container page">
        <LinkList links={this.props.links} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
