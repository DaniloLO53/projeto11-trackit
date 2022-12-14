import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import ContextLogin from './ContextLogin';

function ContextProvider({ children }) {
  const { contextLoginObj } = ContextLogin();

  const context = useMemo({
    ...contextLoginObj,
  });

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
