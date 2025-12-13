import React, { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { 
  Files, 
  Scissors, 
  RotateCw, 
  ImagePlus, 
  Minimize2, 
  PenTool, 
  Home,
  Menu,
  X,
  Facebook, 
  Mail,
  Github,
  Send,
  PhoneCall // Icon for Contact Us
} from 'lucide-react'; 
import clsx from 'clsx';
import './Layout.css'; 

// Import contact data from the new constants file
import { CONTACT_INFO, FOOTER_INFO } from './constants/contactData'; // Adjust path if necessary

const SIDEBAR_ITEMS = [
  { icon: Home, label: 'Dashboard', path: '/' },
  { icon: Files, label: 'Merge PDF', path: '/merge' },
  { icon: Scissors, label: 'Split PDF', path: '/split' },
  { icon: RotateCw, label: 'Rotate', path: '/rotate' },
  { icon: ImagePlus, label: 'Add Media', path: '/add-media' },
  { icon: Minimize2, label: 'Compress', path: '/compress' },
  { icon: PenTool, label: 'Edit PDF', path: '/edit' },
];

// New array for items that appear at the bottom of the main list
const BOTTOM_SIDEBAR_ITEMS = [
    // --- New Contact Us Item Added Here ---
    { icon: PhoneCall, label: 'Contact Us', path: '/contact' },
];


export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  // Get current page title
  const currentItem = [...SIDEBAR_ITEMS, ...BOTTOM_SIDEBAR_ITEMS].find(item => item.path === location.pathname);
  const pageTitle = currentItem ? currentItem.label : 'OSPranto Tech';

  return (
    <div className="app-container">
      {/* Mobile Header */ }
      <header className="mobile-header">
        <div className="logo-mobile">
          <span className="logo-text-mobile">OSPranto Tech</span>
        </div>
        <button className="menu-btn" onClick={toggleSidebar}>
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Sidebar */ }
      <aside className={clsx("sidebar glass-panel", { "open": isSidebarOpen })}>
        <div className="sidebar-header">
          <div className="logo-container">
            <h1 className="logo-text">OSPranto Tech</h1>
            <p className="tagline">Technology with a Sense of Ease</p> 
          </div>
        </div>

        <nav className="sidebar-nav">
          {SIDEBAR_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeSidebar}
              className={({ isActive }) => clsx("nav-item", { active: isActive })}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </NavLink>
          ))}
          
          {/* BOTTOM_SIDEBAR_ITEMS added here (e.g., Contact Us) */}
          <div className="bottom-nav-section">
              {BOTTOM_SIDEBAR_ITEMS.map((item) => (
                  <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={closeSidebar}
                      className={({ isActive }) => clsx("nav-item bottom-nav-item", { active: isActive })}
                  >
                      <item.icon size={20} />
                      <span>{item.label}</span>
                  </NavLink>
              ))}
          </div>

        </nav>

        <div className="sidebar-footer">
            <h4 className="contact-heading">Contact OSPranto Tech</h4>
            <div className="contact-list">
                {CONTACT_INFO.map((item, index) => (
                    <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="contact-item">
                        <item.icon size={16} />
                        <span>{item.text}</span>
                    </a>
                ))}
            </div>
          <div className="copyright-info">
            <p>{FOOTER_INFO.copyright}</p>
            <p className="version">{FOOTER_INFO.version}</p>
          </div>
        </div>
      </aside>

      {/* Main Content */ }
      <main className="main-content">
        <header className="page-header glass-panel">
          <h2>{pageTitle}</h2>
          <div className="header-actions">
           {/* Placeholder for toolbar/actions */}
          </div>
        </header>

        <div className="content-scrollable">
          <Outlet />
        </div>
      </main>

      {/* Mobile Overlay */}
      {isSidebarOpen && <div className="overlay" onClick={closeSidebar} />}
    </div>
  );
}
