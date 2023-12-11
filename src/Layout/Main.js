import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import FooterContent from '../Pages/Shared/FooterContent/FooterContent';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <FooterContent></FooterContent>
        </div>
    );
};

export default Main;