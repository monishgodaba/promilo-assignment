import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="box">
        <h2>Welcome back, Michael</h2>
        <p>25 May, 2023 – Tuesday</p>
      </div>
      <div className="box">
        <h3>My Wallet</h3>
        <p>₹ 2,50,000</p>
        <small>Current Balance</small>
        <p>Running Your Facility admin now.</p>
      </div>
      <div className="box">
        <h4>Pending Actions</h4>
        <ul>
          <li>#1vs25468 - 2 sina are waiting to be Unloaded</li>
          <li>#23256577 - 2 sina are waiting to be Unloaded</li>
          <li>#77509547 - 2 sina are waiting to be Unloaded</li>
          <li>#65875242 - 6 shampoo</li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;