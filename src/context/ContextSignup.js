import { useEffect, useState } from 'react';

function ContextSignup() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [signupData, setSignupData] = useState({});

  const MIN_LENGTH_PASSWORD = 1;

  const emailCheck = email.toLowerCase().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  const passwordCheck = password.length >= MIN_LENGTH_PASSWORD;

  useEffect(() => {
    setDisabled(!(emailCheck && passwordCheck));
  }, [password, email]);

  const contextSignupObject = {
    setEmail,
    email,
    setPassword,
    password,
    name,
    setName,
    photo,
    setPhoto,
    disabled,
    signupData,
    setSignupData,
  };

  return contextSignupObject;
}

export default ContextSignup;
