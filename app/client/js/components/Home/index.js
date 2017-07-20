import React from 'react';
import { connect } from 'react-redux';
import LinkList from '../Modules/LinkList';
import LinkInput from '../Modules/LinkInput';

const mapStateToProps = state => ({
  links: state.links,
  link: state.link
});

const mapDispatchToProps = dispatch => ({
  updateLink: (link) => dispatch({type: 'LINK_UPDATED', link: link}),
  addLink: (linkJson) => dispatch({type: 'LINK_ADD', linkJson: linkJson})
});

class Home extends React.Component {
  render() {
    return (
      <div className="container page">
        <LinkInput link={this.props.link} updateLink={this.props.updateLink} addLink={this.props.addLink} />
        <LinkList links={this.props.links} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
