import React from 'react';
import './styles.scss';
import axios from 'axios';
import { emailEndpoint } from '../../endpoints';

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email:"",
      content: "",
      formErrors: {
        email: true,
        name: true,
        content: true
      },
      submitted: false
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
    this.validateField(field,  e.target.value)
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;  
    switch(fieldName) {
      case 'email':
        var re = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g;
        fieldValidationErrors.email =  !re.test(value);
        break;
      default:
        fieldValidationErrors[fieldName] = value === undefined &&
        value === null || value === "";
    }
    this.setState({formErrors: fieldValidationErrors});
  }

  handleSubmit() {
    axios.post(emailEndpoint, {
      name: this.state.name,
      email: this.state.email,
      content: this.state.content,
      company: "metrocarpet"
    }).then(response => {
        this.setState({submitted: true});
      })
      .catch(error => {
        alert("Sorry an error occurred processing the email request. Please contact us directly");
      });
  }
  render() {
    let formInvalid = false;
    Object.keys(this.state.formErrors).forEach(key => {
      if (this.state.formErrors[key]) {
        formInvalid = this.state.formErrors[key];
      }
    })
    return (
      <div id="contact-form">
        <p onClick={this.contactClick} className="contact-button">Contact Us Today!</p>
        <form onSubmit={this.handleSubmit} encType="multipart/form-data">
          <div className="form-group">
            {this.state.submitted? (<p className="response">Thank you for contacting us. 
              We will get back to you as soon as possible.
              If you need more immediate contact feel free to use the numbers below.</p>):
              (<span className="form-group2"><input
              type="text"
              placeholder="Full Name"
              className={this.state.formErrors["name"]?"error": ""}
              onChange={this.handleChange.bind(this,"name")}
              />
            <input
              type="email"
              placeholder="Email Address"
              className={this.state.formErrors["email"]?"error": ""}
              onChange={this.handleChange.bind(this,"email")}
              />
            <textarea
              type="text"
              placeholder="Message"
              className={this.state.formErrors["content"]?"error": ""}
              onChange={this.handleChange.bind(this,"content")}
            />
            <button
              className="submit rnd-btn"
              type="submit"
              disabled={formInvalid}> Submit
            </button></span>)}
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
