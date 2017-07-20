import React from 'react';
import LinkPreview from './LinkPreview';

const LinkList = props => {
  if (!props.links) {
    return (<span></span>);
  }

  if (props.links.length === 0) {
    return (<span></span>);
  }

  return (
    <ul className="link-list group">
      {
        props.links.map((link, index) => {
          return (
            <LinkPreview link={link} key={index} />
          );
        })
      }
    </ul>
  );
};

export default LinkList;
