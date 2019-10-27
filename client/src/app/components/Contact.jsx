import React from "react";
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions/contact';
import { Grid } from '@material-ui/core';


const renderField = ({ input, type, placeholder, meta: { touched, error } }) => (
  <div className={`input-group ${touched && error ? 'has-error' : ''}`}>
    <input type={type} placeholder={placeholder} {...input} />
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
      <div className='backgroundContact'>
        <Grid container justify="center">
          <Grid item lg={12} md={12} sm={12}>
            <h2>Work with us</h2>
            <h4>
              Provide details about your product or agency. Write a few lines about and contact us. We will responde get back to you as soon as possible.
            </h4>
            <form onSubmit={handleSubmit(this.handleFormSubmit)}>

              {/* Name */}
              <Field name="name" component={renderField} type="text" placeholder="Your Name" />

              {/* Email */}
              <Field name="email" component={renderField} type="text" placeholder="Your Email" />

              {/* Message */}
              <Field name="message" component={renderField} type="text" placeholder="Your Message" />

              {/* Server error message */}
              { this.props.errorMessage && this.props.errorMessage.contact &&
                  <div className="error-container contact-error">Oops! { this.props.errorMessage.contact }</div> }

              {/* Send Button */}
              <button type="submit" className="btn">Send Message</button>
            </form>
          </Grid>
        </Grid>
      </div>
    );
  }
}

function validate(formProps) {
  const errors = {};

  if(!formProps.name) {
    errors.name = 'Name is required'
  }

  if(!formProps.email) {
    errors.email = 'Email is required'
  }

  if(!formProps.message) {
    errors.message = 'Message is required'
  }

  return errors;
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error }
}

Contact = reduxForm({ form: 'contact', validate })(Contact);

export default connect(mapStateToProps, actions)(Contact);
