import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import DashboardContent from '../components/DashboardContent';

const Dashboard = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        <DashboardContent />
      </div>
    </div>
  );
};

export default Dashboard;