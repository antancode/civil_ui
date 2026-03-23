'use client';
import React, { useEffect, useState } from "react";
import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";
import styles from "./controlPanel.module.scss";


export default function ControlPanelLayout({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(true);
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  return (
    <>
      <Header toggleSidebar={() => setIsOpen(!isOpen)} toggleTheme={toggleTheme} theme={theme} isOpen={isOpen} />
      <div style={{ display: 'flex' }}>
        <Sidebar isOpen={isOpen} />
        <div className={` ${styles.main} ${isOpen ? styles.full : styles.collapsed}`}>{children}</div>
      </div>
    </>
  )
}