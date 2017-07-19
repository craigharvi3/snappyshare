import React from 'react';
import data from '../../data';
import { connect } from 'react-redux';
import LinkList from '../Modules/LinkList';

const mapStateToProps = state => ({
	appName: state.appName,
	links: state.links
});

const mapDispatchToProps = dispatch => ({
	onLoad: (payload) => dispatch({type: 'HOME_PAGE_LOADED', payload})
})

class Home extends React.Component {
	componentWillMount() {
		this.props.onLoad(data.Links.all());
	}

	render() {
		return (
			<div className="container page">
				<LinkList links={this.props.links} />
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);