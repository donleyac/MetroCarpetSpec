import React from 'react';
import './styles.scss';

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      number:"",
      message: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field, e) {
    var nextState = {};
    nextState[field] = e.target.value;
    this.setState(nextState);
  }

  handleSubmit() {
    var placeholder = 'mailto:';
    var receipient = 'info@paramountserv.com?';
    var subject = 'subject=Paramount%20Construction' + '%20-%20' + String(this.state.name) + '&';
    var body = 'body=' + String(this.state.number) +'%0D%0A%0D%0A'+ String(this.state.message) +'%0D%0A%0D%0A';
    var link = placeholder + receipient + subject + body;
    window.open(link);
  }
  render() {
    return (
      <div className="contact-form">
        <p id="contact-button">Contact Us Today!</p>
        <form onSubmit={this.handleSubmit} encType="multipart/form-data">
          <div className="form-group">
            <input
              type="text"
              placeholder="Full Name"
              className="form-control"
              onChange={this.handleChange.bind(this,"name")}
              />
            <input
              type="text"
              placeholder="Phone Number"
              className="form-control"
              onChange={this.handleChange.bind(this,"number")}
              />
            <textarea
              type="text"
              placeholder="Message"
              className="form-control"
              onChange={this.handleChange.bind(this,"message")}
            />
            <button
              className="submit rnd-btn"
              type="submit"> Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
Contacts.contextTypes =  {
    router: React.PropTypes.object.isRequired
};
export default Contacts;
