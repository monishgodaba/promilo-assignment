import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">DOQFY</div>
      <nav className="nav-links">
        <select className="branches-dropdown">
          <option>All Branches</option>
          <option>Branch 1</option>
          <option>Branch 2</option>
          <option>Branch 3</option>
        </select>
        <a href="#">Services</a>
        <a href="#">User Management</a>
        <a href="#">My Orders</a>
        <a href="#">Reports</a>
        <a href="#">Stamp Inventory</a>
        <a href="#">Bar Codes</a>
        <a href="#">Invoice</a>
        <a href="#">Messages</a>
        <a href="#">Nikolas Series</a>
      </nav>
      <div className="profile-section">
        <span className="notification-icon">🔔</span>
        <span className="profile-initial">M</span>
      </div>
    </header>
  );
};

export default Header;