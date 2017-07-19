import React from 'react';

const LinkPreview = props => {
	const link = props.link;

	return (
		<div className="link-preview">
			<div className="info">
				<a className="author">
					{link.title} - {link.description}
				</a>
			</div>
		</div>
	);
}

export default LinkPreview;