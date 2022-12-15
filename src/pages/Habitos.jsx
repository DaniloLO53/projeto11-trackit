import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Context from '../context/Context';

function Habitos() {
  const { signupData } = useContext(Context);
  const { data } = signupData;
  const { token } = data;
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const controller = new AbortController();
    const { signal } = controller;

    const fetcher = async () => {
      try {
        const habitsFetched = await axios.get(URL, config, { signal });
        setHabits(habitsFetched);
      } catch (error) {
        console.log(error.message);
        throw new Error(error.message);
      }
    };
    fetcher();

    return () => {
      console.log('Cleaning');
      controller.abort();
    };
  }, []);

  useEffect(() => console.log(habits), [habits]);
  return (
    <StyledHabitos>
      <Header />
      <Body>
        <div>
          <h3>Meus hábitos</h3>
          <button
            type="button"
          >
            +
          </button>
        </div>
        {habits.data.length === 0
          && (
            <p>
              Você não tem nenhum hábito cadastrado ainda.
              Adicione um hábito para começar a trackear!
            </p>
          )}
      </Body>
      <Menu habits={habits.data || []} />
    </StyledHabitos>
  );
}

const StyledHabitos = styled.div`
  /* background-color: red; */
`;

const Body = styled.div`
  /* background-color: red; */
  position: relative;
  top: 70px;
  height: calc(100vh - 190px);
  padding: 20px;

  div {
    /* background-color: yellow; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0 15px 0;

    h3 {
      color: #126ba5;
    }

    button {
      background-color: #52b6ff;
      border: none;
      padding: 5px 15px 5px 15px;
      color: white;
      font-size: 25px;
      border-radius: 5px;
    }
  }
`;

export default Habitos;
