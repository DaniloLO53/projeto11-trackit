import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Login from './pages/Login';

function App() {
  return (
    <StyledContainer>
      <Routes>
        <Route element={<Login />} path="/" />
      </Routes>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  /* background-color: yellow; */
`;

export default App;
