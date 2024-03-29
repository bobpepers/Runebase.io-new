import passport from 'passport';
import { signin, signup, verifiEmail, resendVerification } from './controllers/authController';
import { resetPassword, verifyResetPassword, resetPasswordNew } from './controllers/resetPasswordController';
import { fetchUsers } from './controllers/usersController';
import { fetchChainInfo } from './controllers/chainInfoController';
import { contactSend } from './controllers/contactController';
import { chainInfoBlock } from './controllers/chainInfoBlock';
import passportService from './services/passport';
import { verifyMyCaptcha } from './helpers/recaptcha';

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

const router = (app) => {
  app.get('/', requireAuth, fetchUsers);
  app.post('/signup', verifyMyCaptcha, signup);
  app.post('/signup/verify-email', verifiEmail);
  app.post('/resend-verify-code', resendVerification);
  app.post('/signin', verifyMyCaptcha, requireSignin, signin);
  app.post('/reset-password', resetPassword);
  app.post('/reset-password/verify', verifyResetPassword);
  app.post('/reset-password/new', resetPasswordNew);
  app.post('/contact/send', verifyMyCaptcha, contactSend);
  app.post('/chaininfo/block', chainInfoBlock);
  app.get('/chaininfo', fetchChainInfo);
};

export default router;
