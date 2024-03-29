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
import ContactSuccess from './components/ContactSuccess';

import Radio from './views/Radio';
import Exchange from './views/Exchange';
import Download from './views/Download';
import Status from './views/Status';
import Wallet from './views/Wallet';
import Home from './views/Home';
import Guides from './views/Guides';

import requireAuth from './components/hoc/RequireAuth';
import requireNotAuth from './components/hoc/RequireNotAuth';

export default (
    <div>
        <Route exact path="/" component={Home} />
        <Route path="/download" component={Download} />
        <Route path="/radio" component={Radio} />
        <Route path="/exchange" component={Exchange} />
        <Route path="/guides" component={Guides} />
        <Route path="/status" component={Status} />
        <Route path="/wallet" component={Wallet} />
        <Route path="/signin" component={requireNotAuth(Signin)} />
        <Route exact path="/signup" component={requireNotAuth(Signup)} />
        <Route path="/signout" component={Signout} />
        <Route path="/signup/verify-email" component={requireNotAuth(SignupVerify)} />
        <Route path="/verify-email" component={requireNotAuth(VerifyEmail)} />
        <Route exact path="/reset-password" component={requireNotAuth(ResetPassword)} />
        <Route path="/reset-password/verify" component={ResetPasswordVerify} />
        <Route path="/reset-password/new" component={requireNotAuth(ResetPasswordNew)} />
        <Route path="/users" component={requireAuth(UserList)} />
        <Route path="/contact/success" component={ContactSuccess} />
    </div>
)
