import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../../Shared/NavBar/NavBar';

const BuyerLayOut = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default BuyerLayOut;