import {Link} from "react-router-dom";
import logo from '../../logo.svg';
import {useDispatch, useSelector} from "react-redux";
import {usdPriceSelector, userSelector} from "../../store/selectors/selectors";
import React, {useEffect, useState} from "react";
import './style.scss'
import {TextField} from "@mui/material";
import {walletActions} from "../../reducers/walletSlice";

const Header = () => {
    const userData = useSelector(userSelector)
    const usdPrice = useSelector(usdPriceSelector)
    const dispatch = useDispatch()
    const username = userData?.username
    const [isUsdEditMode,setUsdEditMode] = useState(false)
    const [usdInput,setUsdInput] = useState(usdPrice)
    useEffect(()=>{
        if (!isUsdEditMode && usdPrice !== usdInput) {
            dispatch(walletActions.setUsdPrice(usdInput))
        }
    },[isUsdEditMode])
    return (
        <header className='header-container'>
            <nav>
                <ul className='nav justify-content-center'>
                    <li className="nav-item">
                        <Link className='logo-container' to={'/'}>
                            <img width={90} className='nav-logo' src={logo} alt="logo" />
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to={'edit-page'}>
                            Edit list
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to={'chatPage'}>
                            Chat
                        </Link>
                    </li>
                </ul>
            </nav>
            {username &&
            <div className='header-user-info'>
                {isUsdEditMode ?
                    <TextField onDoubleClick={()=>setUsdEditMode(false)} label='usd price' type={'number'} onChange={(e:any)=>setUsdInput(e.target?.value)} value={usdInput} />
                    : <div onDoubleClick={()=>setUsdEditMode(true)}>usd: {usdPrice}$</div>
                }

                {username}
            </div>}
        </header>
    )
}

export default Header