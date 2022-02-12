import logo from "../../logo.svg";
import React from "react";
import './style.scss'

interface IWidgetContainer {
    width?:number,
    isLoading:boolean,
    children: any
}
export const WidgetContainer = (props: IWidgetContainer)=> {
    const { width,isLoading,children } = props

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


