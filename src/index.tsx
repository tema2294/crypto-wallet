import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header';
import {BrowserRouter} from 'react-router-dom';
import PageContainer from "./components/content-container/pageContainer";
import {store} from './store/store';
import {Provider} from 'react-redux';
import AppRouter from './routes/router';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Header/>
                <PageContainer>
                    <AppRouter/>
                </PageContainer>
                <ToastContainer position="bottom-right"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick={false}
                                rtl={false}
                                pauseOnFocusLoss={false}
                                draggable
                                pauseOnHover />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

