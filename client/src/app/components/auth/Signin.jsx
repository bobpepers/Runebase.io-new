import React, { Component } from 'react';
import { reduxForm, Field, formValueSelector, change } from 'redux-form';
import * as actions from '../../actions/auth';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Captcha from '../Captcha';

const renderField = ({ input, type, placeholder, meta: { touched, error } }) => (
  <div className={`input-group ${touched && error ? 'has-error' : ''}`}>
    <input type={type} placeholder={placeholder} {...input} />
    { touched && error && <div className="form-error">{error}</div> }
  </div>
);

class Signin extends Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(props) {
    this.props.signinUser(props);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="form-container">
        <h1>Sign in</h1>
        <form onSubmit={handleSubmit(this.handleFormSubmit)}>

          {/* Email */}
          <Field name="email" component={renderField} type="text" placeholder="Email" />

          {/* Password */}
          <Field name="password" component={renderField} type="password" placeholder="Password" />

          {/* Forgot password */}
          <div className="password-forgot">
            <Link to="/reset-password">I forgot my password</Link>
          </div>
          <Field component={Captcha} change={change} name="captchaResponse"/>
          {/* Server error message */}
          { this.props.errorMessage && this.props.errorMessage.signin &&
              <div className="error-container signin-error">Oops! { this.props.errorMessage.signin }</div> }

          {/* Signin button */}
          <button type="submit" className="btn">Sign in</button>

          {/* Signup button */}
          <div className="form-bottom">
            <p>Don't have an account?</p>
            <Link to="/signup">Click here to sign up</Link>
          </div>
        </form>
      </div>
    )
  }
}

function validate(formProps) {
  const errors = {};
  console.log(formProps);
  if(!formProps.email) {
    errors.email = 'Email is required'
  }

  if(!formProps.password) {
    errors.password = 'Password is required'
  }

  if (!formProps.captchaResponse) {
    errors.captchaResponse = 'Please validate the captcha.';
  }

  return errors;
}
const selector = formValueSelector('signin');
function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
    recaptchaValue: selector(state, 'captchaResponse'),
  }
}

Signin = reduxForm({ form: 'signin', validate })(Signin);

export default connect(mapStateToProps, actions)(Signin);
