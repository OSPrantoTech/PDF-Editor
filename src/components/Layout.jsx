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
  Facebook, // New icons for contact
  Mail,
  Github,
  Send
} from 'lucide-react'; // Added Facebook, Mail, Github, Send icons
import clsx from 'clsx';
import './Layout.css'; // We'll create this for layout-specific styles

const SIDEBAR_ITEMS = [
  { icon: Home, label: 'Dashboard', path: '/' },
  { icon: Files, label: 'Merge PDF', path: '/merge' },
  { icon: Scissors, label: 'Split PDF', path: '/split' },
  { icon: RotateCw, label: 'Rotate', path: '/rotate' },
  { icon: ImagePlus, label: 'Add Media', path: '/add-media' },
  { icon: Minimize2, label: 'Compress', path: '/compress' },
  { icon: PenTool, label: 'Edit PDF', path: '/edit' },
];

// Your contact information
const CONTACT_INFO = [
    { icon: Facebook, text: 'Adnan Hasan Pranto', link: 'https://www.facebook.com/AdnanHasanPranto' }, // Example link, replace with actual
    { icon: Mail, text: 'OSPranto.Official@gmail.com', link: 'mailto:OSPranto.Official@gmail.com' },
    { icon: Github, text: 'OSPranto Tech', link: 'https://github.com/OSPranto' }, // Example link, replace with actual
    { icon: Send, text: '@MrMysteryMoon (Telegram)', link: 'https://t.me/MrMysteryMoon' }, // Example link, replace with actual
];


export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  // Get current page title
  const currentItem = SIDEBAR_ITEMS.find(item => item.path === location.pathname);
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
            <p className="tagline">Technology with a Sense of Ease</p> {/* Tagline added */}
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
            <p>©OSPranto Tech 2025</p>
            <p className="version">v1.0.0</p>
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
