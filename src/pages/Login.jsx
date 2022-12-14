import React, { useContext } from 'react';
import styled from 'styled-components';
import Context from '../context/Context';

function Login() {
  const { contextLoginObj } = useContext(Context);
  const {
    disabled, email, password, setPassword, setEmail,
  } = contextLoginObj;

  return (
    <StyledLogin>
      <figure>
        <img alt="login" src="./logo.png" />
      </figure>

      <form>
        <label htmlFor="email">
          <input
            type="text"
            id="email"
            placeholder="Email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>
        <label htmlFor="password">
          <input
            type="text"
            id="password"
            placeholder="Password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </label>

        <button
          type="button"
          disabled={disabled}
        >
          Entrar
        </button>

        <button
          type="button"
        >
          Não tem uma conta? Cadastre-se!
        </button>
      </form>
    </StyledLogin>
  );
}

const StyledLogin = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  form {
    /* background-color: yellow; */
    display: flex;
    flex-direction: column;
    width: 80%;

    label {
      /* background-color: purple; */
      width: 100%;
      display: flex;
      justify-content: center;

      input {
        width: 100%;
        height: 40px;
        border-radius: 4px;
        padding: 0 7px 0 7px;
        border: 1px solid #d4d4d4;
        margin: 5px;
      }
    }

    button:first-of-type {
      background-color: #52B6FF;
      min-height: 40px;
      font-size: 20px;
      padding: 10px;
      color: white;
      margin-top: 5px;
      border: none;
      border-radius: 5px;
    }

    button:nth-of-type(2) {
      background-color: transparent;
      color: #52B6FF;
      text-decoration: underline;
      border: none;
      margin-top: 30px;
    }
  }
`;

export default Login;
