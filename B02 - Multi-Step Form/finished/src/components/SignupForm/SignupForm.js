import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ProfileForm from './1ProfileForm';
import SocialForm from './2SocialForm'; 
import Review from './3Review';
import StepLinks from './StepLinks';
import { SignupFormProvider } from './SignupFormContext';

export default function SignupForm() {
  const location = useLocation();

  return (
    <SignupFormProvider>
      <div className="signup-form">
        {/* show the steps and links */}
        <StepLinks />

        {/* show the forms */}
        <AnimatePresence>
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact component={ProfileForm} />
            <Route path="/social" component={SocialForm} />
            <Route path="/review" component={Review} />
          </Switch>
        </AnimatePresence>
      </div>
    </SignupFormProvider>
  );
}
