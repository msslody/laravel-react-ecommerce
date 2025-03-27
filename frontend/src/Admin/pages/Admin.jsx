import React from 'react'
import AdminSidebar from '../components/layout/AdminSidebar'
import AdminNavbar from '../components/layout/AdminNavbar'
import Dashboard from '../components/Dashboard'

export default function Admin() {
  return (
    <div className="admin-layout">
      <AdminNavbar />
      <AdminSidebar />
      <div className="main-content">
        <Dashboard/>
      </div>
    </div>
  )
}