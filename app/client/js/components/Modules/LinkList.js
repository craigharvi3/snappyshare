import React from 'react';
import LinkPreview from './LinkPreview';

class LinkList extends React.Component {
  render() {
    if (!this.props.links) {
      return null;
    }

    return (
      <ul className="link-list group">
        {
          this.props.links.map((link, index) => {
            return (
              <LinkPreview link={link} key={index} />
            );
          })
        }
      </ul>
    );
  }
}

export default LinkList;

