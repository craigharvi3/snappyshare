import React from 'react';
import Truncate from 'react-truncate';

const LinkPreview = props => {
  const link = props.link;

  let image = (<div className="link-preview-image"></div>);

  if (link.images && link.images.length > 0) {
    image = (<div className="link-preview-image" style={{backgroundImage: `url(${link.images[0]})`}}></div>);
  }

  return (
    <li className="link-preview">
      <a href={link.url} target="_blank">
        {image}
        <p className="link-preview-title truncate">
          <Truncate lines={3} ellipsis="...">
            {link.title || link.url}
          </Truncate>
        </p>
      </a>
    </li>
  );
}

export default LinkPreview;
