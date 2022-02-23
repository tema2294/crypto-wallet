import {useDispatch, useSelector} from "react-redux";
import {modalUpdateCoinDataSelector} from "../../store/selectors/selectors";
import {Modal, TextField} from "@mui/material";
import {walletActions} from "../../reducers/walletSlice";
import React, {useEffect, useState} from "react";
import './style.scss'
import {Button} from "react-bootstrap";

export const ModalUpdateCoin = () => {
    const dispatch = useDispatch()
    const { isVisible, coin } = useSelector(modalUpdateCoinDataSelector)
    const count = coin?.count || 0
    const name = coin?.name || ''
    const coinId = coin?.id || ''
    const small = coin?.image?.small || ''

    const [countCoin,setCountCoin] = useState<any>(count)


    const handleClose = () => dispatch(walletActions.setModalUpdate({isVisible: false, coin: undefined}))
    const updateCoin = () => {
        dispatch(walletActions.updateCoin({coinId, count: countCoin}))
        handleClose()
    }
    useEffect(()=>{
        setCountCoin(count)
    },[count])
    return (
        <Modal
            open={isVisible}
            onClose={handleClose}
            className={'parent-modal'}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <div className={'modal-update-coin'}>
                <div className="d-flex align-items-center">
                    <div className='card-log-container'>
                        <img className='coin-image' src={small} />
                    </div>
                    <div className="card-title">{name}</div>
                </div>
                <TextField label='Count coin' type={'number'} onChange={(e)=>setCountCoin(e.target?.value)} value={countCoin} className='input-count' />
                <Button onClick={updateCoin} className='mt-3'>
                    Обновить
                </Button>
            </div>
        </Modal>
    )
}