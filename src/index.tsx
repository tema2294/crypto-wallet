import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Header from './components/header/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageContainer from "./components/content-container/pageContainer";
import { store } from './store/store';
import { Provider } from 'react-redux';
import {EditPage} from "./components/editPage/editPage";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
      <BrowserRouter>
          <Header />
          <PageContainer>
          <Routes>
              <Route path="/" element={<App />} />
              <Route path='edit-page' element={<EditPage />} />
          </Routes>
          </PageContainer>
      </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

