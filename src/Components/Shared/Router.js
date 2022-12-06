import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoDetail from '../../Pages/TodoDetail';
import TodoList from '../../Pages/TodoList';
import Layout from './Layout';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="TodoDetail" element={<TodoDetail />} />
          <Route path="TodoDetail/:id" element={<TodoDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
