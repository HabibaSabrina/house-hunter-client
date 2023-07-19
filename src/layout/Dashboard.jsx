import React from 'react';
import DashboardHeader from '../pages/Dashboard/DashboardHeader/DashboardHeader';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <DashboardHeader></DashboardHeader>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;