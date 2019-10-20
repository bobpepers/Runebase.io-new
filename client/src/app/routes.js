import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import UserList from './components/users/UserList';
import Signin from './components/auth/Signin';
import Signout from './components/auth/Signout';
import Signup from './components/auth/Signup';
import VerifyEmail from './components/auth/VerifyEmail';
import SignupVerify from './components/auth/SignupVerify';
import ResetPassword from './components/resetPassword/ResetPassword';
import ResetPasswordVerify from './components/resetPassword/ResetPasswordVerify';
import ResetPasswordNew from './components/resetPassword/ResetPasswordNew';

import Radio from './views/Radio';
import Download from './views/Download';
import Status from './views/Status';
import Home from './views/Home';

import requireAuth from './components/hoc/RequireAuth';
import requireNotAuth from './components/hoc/RequireNotAuth';

export default (
    <div>
        <Route exact path="/" component={Home} />
        <Route path="/download" component={Download} />
        <Route path="/radio" component={Radio} />
        <Route path="/status" component={requireAuth(Status)} />
        <Route path="/signin" component={requireNotAuth(Signin)} />
        <Route path="/signup" component={requireNotAuth(Signup)} />
        <Route path="/signout" component={Signout} />
        <Route path="/signup/verify-email" component={requireNotAuth(SignupVerify)} />
        <Route path="/verify-email" component={requireNotAuth(VerifyEmail)} />
        <Route path="/reset-password" component={requireNotAuth(ResetPassword)} />
        <Route path="/reset-password/verify" component={ResetPasswordVerify} />
        <Route path="/reset-password/new" component={requireNotAuth(ResetPasswordNew)} />
        <Route path="/users" component={requireAuth(UserList)} />
    </div>
)
