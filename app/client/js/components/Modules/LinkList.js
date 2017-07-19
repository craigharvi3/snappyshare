import React from 'react';
import LinkPreview from './LinkPreview';

const LinkList = props => {
	if (!props.links) {
		return (
			<div className="link-preview">Loading...</div>
		);
	}

	if (props.links.length === 0) {
		return (
			<div className="link-preview">
				No links are here... yet.
			</div>
		);
	}

	return (
		<div>
			{
				props.links.map(link => {
					return (
						<LinkPreview link={link} key={link.url} />
					);
				})
			}
		</div>
	);
};

export default LinkList;