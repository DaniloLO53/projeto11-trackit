import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import ContextProvider from './context/ContextProvider';
import Login from './pages/Login';

function App() {
  return (
    <StyledContainer>
      <ContextProvider>
        <Routes>
          <Route element={<Login />} path="/" />
        </Routes>
      </ContextProvider>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  /* background-color: yellow; */
`;

export default App;
