import React from 'react';
const AjaxPromise = require('ajax-promise');
const validUrl = require('valid-url');
const alertify = require('alertifyjs');

class LinkInput extends React.Component {
  componentDidMount(){
    this.linkInput.focus();
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!validUrl.isUri(this.linkInput.value)) {
      alertify.error("Sorry, looks like that's an invalid URL.", 5);
      return;
    }

    let encodedLink = encodeURIComponent(this.linkInput.value);

    AjaxPromise
      .get(`/api/link/${encodedLink}`)
      .then((response) => {
        this.props.addLink(response);
      });
  }

  handleKeyUp(e) {
    this.props.updateLink(this.linkInput.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="control">
          <input
            type="text"
            placeholder="Paste a link in here..."
            name="l"
            value={this.props.link}
            ref={(input) => { this.linkInput = input; }}
            onChange={this.handleKeyUp.bind(this)}
          />
        </div>
      </form>
    );
  }
}

export default LinkInput;
