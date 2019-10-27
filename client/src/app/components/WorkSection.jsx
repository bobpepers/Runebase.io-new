import React from "react";
import { reduxForm, Field } from 'redux-form';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import * as actions from '../actions/contact';
import { Grid } from '@material-ui/core';


const renderField = ({ input, type, placeholder, meta: { touched, error } }) => (
  <div className={`input-group ${touched && error ? 'has-error' : ''}`}>
    <input type={type} placeholder={placeholder} {...input} />
    { touched && error && <div className="form-error">{error}</div> }
  </div>
);

class WorkSection extends React.Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(props) {
    this.props.constactSend(props);
  }
  render() {
    const { t } = this.props;
    const { classes, handleSubmit } = this.props;
    return (
      <div>
        <Grid container justify="center" id='contact'>
          <Grid item lg={12} md={12} sm={12}>
            <h2>{t('workWithUS')}</h2>
            <h4>
              {t('workWithUsDescription')}
            </h4>
            <form onSubmit={handleSubmit(this.handleFormSubmit)}>

              {/* Name */}
              <Field name="name" component={renderField} type="text" placeholder={`${t('yourName')}`} />

              {/* Email */}
              <Field name="email" component={renderField} type="text" placeholder={`${t('yourEmail')}`} />

              {/* Message */}
              <Field name="message" component={renderField} type="text" placeholder={`${t('yourMessage')}`} />

              {/* Server error message */}
              { this.props.errorMessage && this.props.errorMessage.contact &&
                  <div className="error-container contact-error">Oops! { this.props.errorMessage.contact }</div> }

              {/* Send Button */}
              <button type="submit" className="btn">{`${t('sendMessage')}`}</button>
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
    errors.name = {t('nameRequired')}
  }

  if(!formProps.email) {
    errors.email = {t('emailRequired')}
  }

  if(!formProps.message) {
    errors.message = {t('messageRequired')}
  }

  return errors;
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error }
}

WorkSection = reduxForm({ form: 'contact', validate })(WorkSection);

export default connect(mapStateToProps, actions)(withTranslation()(WorkSection));