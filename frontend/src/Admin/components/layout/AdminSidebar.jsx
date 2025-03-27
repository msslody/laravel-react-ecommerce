import React, { useState } from 'react';

export default function AdminSidebar() {
  const [active, setActive] = useState('Dashboard');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSetActive = (menu) => {
    setActive(menu);
    if (menu === 'Products') {
      setDropdownOpen(!dropdownOpen);
    }
  };

  return (
    <>
    <aside className="sidebar sidebar-offcanvas admin-sidebar" id="sidebar">
      <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
        <a className="sidebar-brand brand-logo" href="#">
          <img src="/admin/images/logo.svg" alt="logo" />
        </a>
        <a className="sidebar-brand brand-logo-mini" href="#">
          <img src="/admin/images/logo-mini.svg" alt="logo" />
        </a>
      </div>
      <ul className="nav">
        <li className="nav-item profile">
          <div className="profile-desc">
            <div className="profile-pic">
              <div className="count-indicator">
                <img className="img-xs rounded-circle" src="/admin/images/faces/face23.jpg" alt="Profile" />
                <span className="count bg-success"></span>
              </div>
              <div className="profile-name">
                <h5 className="mb-0 font-weight-normal">Admin</h5>
                <span>Gold Member</span>
              </div>
            </div>
          </div>
        </li>
        <li className="nav-item nav-category">
          <span className="nav-link">Navigation</span>
        </li>
        <li className={`nav-item menu-items ${active === 'Dashboard' ? 'active' : ''}`} onClick={() => handleSetActive('Dashboard')}>
          <a className="nav-link" href="#">
            <span className="menu-icon"><i className="mdi mdi-speedometer"></i></span>
            <span className="menu-title">Dashboard</span>
          </a>
        </li>
        <li className={`nav-item menu-items ${active === 'Slideshow' ? 'active' : ''}`} onClick={() => handleSetActive('Slideshow')}>
          <a className="nav-link" href="#">
            <span className="menu-icon"><i className="mdi mdi-image"></i></span>
            <span className="menu-title">Slideshow</span>
          </a>
        </li>

        {/* Dropdown with Smooth Animation */}
        <li className={`nav-item menu-items ${active === 'Products' ? 'active' : ''}`}>
          <a className="nav-link" href="#" onClick={() => handleSetActive('Products')}>
            <span className="menu-icon"><i className="mdi mdi-cart"></i></span>
            <span className="menu-title">Products</span>
            <i className={`menu-arrow mdi ${dropdownOpen ? 'mdi-chevron-down' : 'mdi-chevron-right'}`}></i>
          </a>
          <div className={`dropdown-container ${dropdownOpen ? 'dropdown-open' : ''}`}>
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"><a className="nav-link" href="#">View Products</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Create New</a></li>
            </ul>
          </div>
        </li>

        <li className={`nav-item menu-items ${active === 'Categories' ? 'active' : ''}`} onClick={() => handleSetActive('Categories')}>
          <a className="nav-link" href="#">
            <span className="menu-icon"><i className="mdi mdi-format-list-bulleted"></i></span>
            <span className="menu-title">Categories</span>
          </a>
        </li>
        <li className={`nav-item menu-items ${active === 'Users' ? 'active' : ''}`} onClick={() => handleSetActive('Users')}>
          <a className="nav-link" href="#">
            <span className="menu-icon"><i className="mdi mdi-account-group"></i></span>
            <span className="menu-title">Users</span>
          </a>
        </li>
        <li className={`nav-item menu-items ${active === 'Settings' ? 'active' : ''}`} onClick={() => handleSetActive('Settings')}>
          <a className="nav-link" href="#">
            <span className="menu-icon"><i className="mdi mdi-settings"></i></span>
            <span className="menu-title">Settings</span>
          </a>
        </li>
        <li className={`nav-item menu-items ${active === 'Logout' ? 'active' : ''}`} onClick={() => handleSetActive('Logout')}>
          <a className="nav-link" href="#">
            <span className="menu-icon"><i className="mdi mdi-logout"></i></span>
            <span className="menu-title">Logout</span>
          </a>
        </li>
      </ul>

      {/* Styles for smooth dropdown animation */}
      <style>{`
        .dropdown-container {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-in-out;
        }
        .dropdown-open {
          max-height: 100px; /* Adjust based on content */
        }
      `}</style>
    </aside>
    
    </>
  );
}
