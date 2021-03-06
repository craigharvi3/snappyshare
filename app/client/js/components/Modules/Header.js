import React from 'react';

class Header extends React.Component {
  render() {

    let button = null;

    if (this.props.links && this.props.links.length > 0) {
      button = (
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <button className="button" onClick={this.props.publish}>Publish</button>
          </li>
        </ul>
      );
    }

    return (
      <nav className="navbar navbar-light">
        <div className="container group">
          <a href="/" className="navbar-brand">
            {this.props.appName.toLowerCase()}
          </a>
         {button}
        </div>
      </nav>
    );
  }
}

export default Header;
