import React from 'react';
import Form from '../Form/Form';
import Header from '../Header/Header';
import './Style.css';

const Layout = ({ children }) => {
  return (
    <div className="wrap">
      <div>
        <Header />
        <Form />
        {children}
      </div>
    </div>
  );
};

export default Layout;
