import React from 'react';

class LinkInput extends React.Component {
  componentDidMount(){
    this.linkInput.focus();
  }

  handleSubmit(e) {
    e.preventDefault();
    let link = this.linkInput.value;
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
