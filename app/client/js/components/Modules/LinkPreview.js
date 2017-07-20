import React from 'react';
import Truncate from 'react-truncate';

const LinkPreview = props => {
  const link = props.link;

  return (
    <li className="link-preview">
      <a href={link.url} target="_blank">
        <div className="link-preview-image" style={{backgroundImage: `url(${link.images[0]})`}}></div>
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
