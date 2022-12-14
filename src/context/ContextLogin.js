import { useEffect, useState } from 'react';

const ContextLogin = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [disabled, setDisabled] = useState(true);

  const MIN_LENGTH_PASSWORD = 1;

  const emailCheck = email.toLowerCase().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  const passwordCheck = password.length >= MIN_LENGTH_PASSWORD;

  useEffect(() => {
    setDisabled(!(emailCheck && passwordCheck));
  }, [password, email]);

  const contextLoginObject = {
    setEmail,
    email,
    setPassword,
    password,
    disabled,
  };

  return contextLoginObject;
};

export default ContextLogin;
