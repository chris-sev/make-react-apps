import React, { createContext, useContext, useState } from 'react';

export const SignupFormContext = createContext();
export const useSignupForm = () => useContext(SignupFormContext);

export function SignupFormProvider({ children }) {
  const [profile, setProfile] = useState({});
  const [social, setSocial] = useState({});

  return (
    <SignupFormContext.Provider
      value={{ profile, setProfile, social, setSocial }}
    >
      {children}
    </SignupFormContext.Provider>
  );
}
