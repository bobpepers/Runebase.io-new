import React from "react";
import { reduxForm, Field, change, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import ScrollableSection from 'react-update-url-on-scroll';
import * as actions from '../actions/contact';
import { Grid } from '@material-ui/core';
import Captcha from './Captcha';



const renderField = ({ input, type, placeholder, meta: { touched, error } }) => (
  <div className={`input-group ${touched && error ? 'has-error' : ''}`}>
    <input type={type} placeholder={placeholder} {...input} />
    { touched && error && <div className="form-error">{error}</div> }
  </div>
);
const textArea = ({ input, type, placeholder, meta: { touched, error } }) => (
  <div className={`input-group text-area ${touched && error ? 'has-error' : ''}`}>
    <textarea type={type} placeholder={placeholder} {...input} />
    { touched && error && <div className="form-error">{error}</div> }
  </div>
);

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(props) {
    this.props.contactSend(props);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <ScrollableSection hash={'contact'}>
      <div id='contact' className='backgroundContact textBorder text-center'>
        <Grid container justify="center">
          <Grid item lg={12} md={12} sm={12}>
            <h2>Work with us</h2>
            <h4>
              Provide details about your product or agency. Write a few lines about it and contact us. We will responde get back to you as soon as possible.
            </h4>
            <form onSubmit={handleSubmit(this.handleFormSubmit)}>

              {/* Name */}
              <Field name="name" component={renderField} type="text" placeholder="Your Name" />

              {/* Email */}
              <Field name="email" component={renderField} type="text" placeholder="Your Email" />

              {/* Message */}
              <Field name="message" component={textArea} type="text" placeholder="Your Message" />

              {/* Recaptcha */}
              <Field component={Captcha} change={change} name="captchaResponse"/>

              {/* Server error message */}
              { this.props.errorMessage && this.props.errorMessage.contact &&
                  <div className="error-container contact-error">Oops! { this.props.errorMessage.contact }</div> }

              {/* Send Button */}
              <button type="submit" className="btn workFormButton">Send Message</button>
            </form>
          </Grid>
        </Grid>
      </div>
      </ScrollableSection>
    );
  }
}

function validate(formProps) {
  const errors = {};
  console.log(formProps);

  if(!formProps.name) {
    errors.name = 'Name is required'
  }

  if(!formProps.email) {
    errors.email = 'Email is required'
  }

  if(!formProps.message) {
    errors.message = 'Message is required'
  }

  if (!formProps.captchaResponse) {
    errors.captchaResponse = 'Please validate the captcha.';
  }

  return errors;
}

const selector = formValueSelector('contact');
function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
    recaptchaValue: selector(state, 'captchaResponse'),
  }
}

Contact = reduxForm({ form: 'contact', validate })(Contact);

export default connect(mapStateToProps, actions)(Contact);
