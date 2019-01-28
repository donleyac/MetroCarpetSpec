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
  contactClick() {
    var contactform = document.getElementById("contact-form");
    contactform.classList ? contactform.classList.toggle('open') : contactform.className += ' open';
  }
  handleChange(field, e) {
    var nextState = {};
    nextState[field] = e.target.value;
    this.setState(nextState);
  }

  handleSubmit() {
    var placeholder = 'mailto:';
    var receipient = 'eecheverria@dcmetrocarpet.com?';
    var subject = 'subject=Metropolitian%20Carpet%20 Website' + '%20-%20' + String(this.state.name) + '&';
    var body = 'body=' + String(this.state.number) +'%0D%0A%0D%0A'+ String(this.state.message) +'%0D%0A%0D%0A';
    var link = placeholder + receipient + subject + body;
    window.open(link);
  }
  render() {
    return (
      <div id="contact-form">
        <p onClick={this.contactClick} className="contact-button">Contact Us Today!</p>
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
              <div className="numbers">
                <p>Emergency: 877-687-5730</p>
                <p>Office: 703-964-3210</p>
            </div>
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
