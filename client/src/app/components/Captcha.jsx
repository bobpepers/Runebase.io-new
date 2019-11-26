import React, { Component } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import styled from 'styled-components';
import { change } from 'redux-form';

class Captcha extends Component {
    constructor(props) {
        super(props);
        window.recaptchaOptions = { lang: this.props.language }; //set language that comes from props E.g.: fr/es/en etc..
    }

    onChange = (value) => {
        this.props.meta.dispatch(change('contact', 'captchaResponse', value));
        this.props.meta.dispatch(change('signin', 'captchaResponse', value));
        this.props.meta.dispatch(change('signup', 'captchaResponse', value));
    };

    render() {
        const { meta: { touched, error } } = this.props;

        return (
            <CaptchaWrapper>
                <ReCAPTCHA
                    sitekey={'6LfXVr4UAAAAAADuo8DUjVErFqGY_NQ4tP6moPPF'}
                    onChange={response => this.onChange(response)}
                />
                <ErrorMessage>{ touched ? error : '' }</ErrorMessage>
            </CaptchaWrapper>
        );
    }
}

const CaptchaWrapper = styled.div`
`;

const ErrorMessage = styled.p`
    color: red;
`;

export default Captcha;