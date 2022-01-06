import './style.scss'
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {walletActions} from "../../reducers/walletSlice";
import {isLoadingSelector} from "../../store/selectors/selectors";


const LoginPage = () => {
    const dispatch = useDispatch()
    const isLoading = useSelector(isLoadingSelector)
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const onChangeLogin = (event: any) => {
       const { value } =  event.target
        setUsername(value)
    }
    const onChangePassword = (event: any) => {
       const { value } =  event.target
        setPassword(value)
    }

    const handleLogin = (event: any) => {
        event.preventDefault();
        dispatch(walletActions.authorize({username,password}))
    }
   return (
       <div className='login-container'>
        <form className='login-form'>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input disabled={isLoading} onChange={onChangeLogin} value={username}  type="login" className="form-control" placeholder="Enter login"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input disabled={isLoading} onChange={onChangePassword} value={password} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <button disabled={isLoading} onClick={handleLogin}  className="btn btn-primary w-100 mt-3">Submit</button>
        </form>
    </div>
   )}


export default LoginPage