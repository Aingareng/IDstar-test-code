import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Detail } from './pages';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/detail' element={<Detail />}></Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
