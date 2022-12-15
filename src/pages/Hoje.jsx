import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Context from '../context/Context';

function Hoje() {
  const { signupData } = useContext(Context);
  const { data } = signupData;
  const { token } = data;
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today';
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

  return (
    <div>
      <Header />
      <Menu habits={habits.data || []} />
    </div>
  );
}

export default Hoje;
