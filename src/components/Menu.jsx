import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CircularProgressbar } from 'react-circular-progressbar';
import PropTypes from 'prop-types';

function Menu({ habits }) {
  const navigate = useNavigate();
  console.log(habits);

  return (
    <StyledMenu>
      <button
        type="button"
        onClick={() => navigate('/habitos')}
      >
        Hábitos
      </button>
      <button
        type="button"
        onClick={() => navigate('/hoje')}
      >
        <CircularProgressbar
          className="progressbar"
          // value={completedHabits}
          text="Hoje"
          background
          backgroundPadding={6}
          styles={{
            path: {
              stroke: '#fff',
              strokeLinecap: 'round',
            },
            trail: {
              stroke: '#52b6ff',
              strokeLinecap: 'round',
            },
            text: {
              fill: '#fff',
              fontSize: '18px',
              fontFamily: 'Lexend Deca',
            },
            background: {
              fill: '#52b6ff',
            },
          }}
        />
      </button>
      <button
        type="button"
        onClick={() => navigate('/historico')}
      >
        Histórico
      </button>
    </StyledMenu>
  );
}

const StyledMenu = styled.div`
  background-color: purple;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 120px;
  padding: 40px;

  button {
    background-color: transparent;
    border: none;
  }
`;

Menu.propTypes = {
  habits: PropTypes.arrayOf(PropTypes.shape(
    PropTypes.string.isRequired,
    PropTypes.string.isRequired,
    PropTypes.bool.isRequired,
    PropTypes.string.isRequired,
    PropTypes.string.isRequired,
  )).isRequired,
};

export default Menu;
