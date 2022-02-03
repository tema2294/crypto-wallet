import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useLocation} from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import {userSelector} from "../store/selectors/selectors";
import {walletActions} from "../reducers/walletSlice";
import '../index.css';
import AuthorizeRoutes from './authorized-routes';
import UnauthorizedRoutes from './unauthorize-routes';


const AppRouter = () => {
    const user = useSelector(userSelector)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { pathname: location } = useLocation();
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
        <>
            {
                user ?
                    <AuthorizeRoutes />
                    :
                    <UnauthorizedRoutes />
            }
        </>
    )
}

export default AppRouter

