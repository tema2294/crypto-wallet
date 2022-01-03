import logo from "../../logo.svg";
import React from "react";
import './style.scss'

export const WidgetContainer = (props: any)=> {
    const {width,isLoading,children} = props

    return (
        <div style={{width: width || '100%'}} className='justify-content-center d-flex widget-container'>
            {children}
            {isLoading &&
            <div className='loader-container'>
                <img className='loader' src={logo} alt='loader-logo'/>
            </div>}
        </div>
    )
}


