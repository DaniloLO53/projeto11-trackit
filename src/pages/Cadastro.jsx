/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../context/Context';
import { StyledLogin } from './Login';

function Cadastro() {
  const {
    loading,
    setLoading,
    setEmail,
    email,
    setPassword,
    password,
    name,
    setName,
    photo,
    setPhoto,
    disabled,
  } = useContext(Context);

  // const navigate = useNavigate();

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
        <label htmlFor="name">
          <input
            type="text"
            id="name"
            placeholder="Nome"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <label htmlFor="photo">
          <input
            type="text"
            id="photo"
            placeholder="Foto"
            value={photo}
            onChange={({ target }) => setPhoto(target.value)}
          />
        </label>

        <button
          type="button"
        // disabled={disabled}
        // onClick={() => handleClick()}
        >
          Cadastrar
        </button>

        <button
          type="button"
        // onClick={() => navigate('/cadastro')}
        >
          Já tem uma conta? Faça login!
        </button>
      </form>
    </StyledLogin>
  );
}

export default Cadastro;
