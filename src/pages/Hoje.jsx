import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';

function Hoje() {
  const { signupData } = useContext(Context);
  const { data } = signupData;
  const { token } = data;

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
        const habits = await axios.get(URL, config, { signal });
        console.log(habits);
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
      iu
    </div>
  );
}

export default Hoje;
