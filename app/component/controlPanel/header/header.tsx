'use client';
import React from "react";
import styles from "./header.module.scss";
import Dropdown from "./component/dropdowm/dropdown";
import { Menu, Moon, Sun } from "lucide-react";
export default function Header({ toggleSidebar, toggleTheme, theme, isOpen }: { toggleSidebar: () => void, toggleTheme: () => void, theme: 'light' | 'dark', isOpen: boolean }) {
  return (
    <header className={`${styles.header} ${isOpen ? styles.full : styles.collapsed}`}>
      <nav>
        <div className={styles.leftSection}>
          <button onClick={toggleSidebar} className={styles.menuButton}>
            <Menu />
          </button>
          <a href="/home" className="mr-4">Home</a>
          <a href="/about">About</a>
        </div>

        <div className={styles.rightSection}>
          
          <button onClick={toggleTheme} className={styles.themeButton}>
            {theme === 'light' ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <Dropdown />
        </div>
      </nav>
    </header>
  );
}