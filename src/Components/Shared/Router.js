import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoDetail from '../../Pages/TodoDetail';
import TodoList from '../../Pages/TodoList';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/TodoDetail">
          <Route path=":id" element={<TodoDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
