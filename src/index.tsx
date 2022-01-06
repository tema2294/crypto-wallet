import React, {useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Header from './components/header/header';
import {BrowserRouter, Route, Routes, useNavigate ,Navigate, useLocation} from 'react-router-dom';
import PageContainer from "./components/content-container/pageContainer";
import {store} from './store/store';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {EditPage} from "./components/editPage/editPage";
import LoginPage from "./components/login-page/loginPage";
import {userSelector} from "./store/selectors/selectors";
import {walletActions} from "./reducers/walletSlice";

const AppRouter = () => {
    const user = useSelector(userSelector)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {pathname: location} = useLocation();
    const isLoginPage = location === '/login'
    useEffect(()=> {
        dispatch(walletActions.getUserInfo())
    },[])
    useEffect(() => {
        if (isLoginPage) {
            navigate('/');
        }
    }, [user])

    return (
        <Routes>
            {
                user ?
                    <>
                        <Route path="/" element={<App/>}/>
                        <Route path='edit-page' element={<EditPage/>}/>
                        <Route path='login' element={<LoginPage/>}/>
                    </>
                    :
                    <>
                        <Route path='login' element={<LoginPage/>}/>
                        <Route
                            path="*"
                            element={<Navigate to="login" />}
                        />
                    </>
            }

        </Routes>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Header/>
                <PageContainer>
                    <AppRouter/>
                </PageContainer>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

