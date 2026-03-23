'use client';
import React from "react";
import styles from "./sidebar.module.scss";
import { BrickWall, CirclePile, Drill, HandCoins, House, Monitor, PersonStanding, Presentation, ReceiptIndianRupee, ScrollText, Siren, UmbrellaOff, UserCog } from "lucide-react";
import Link from "next/link";
export default function Sidebar({ isOpen }: { isOpen: boolean }) {

  const menuItems = [
    { label: "Home", icon: <House />, link: "/home" },
    { label: "Dashboard", icon: <Monitor />, link: "/dashboard" },
    { label: "Projects", icon: <Presentation />, link: "/projects" },
    { label: "Budget & BOQ", icon: <HandCoins />, link: "/budget" },
    { label: "Materials", icon: <CirclePile />, link: "/materials" },
    { label: "Labour", icon: <PersonStanding />, link: "/labour" },
    { label: "Progress", icon: <Drill />, link: "/progress" },
    { label: "Billing", icon: <ReceiptIndianRupee />, link: "/billing" },
    { label: "Forecast & Risk", icon: <UmbrellaOff />, link: "/forecast-risk" },
    { label: "Project Health", icon: <BrickWall />, link: "/project-health" },
    { label: "Alerts", icon: <Siren />, link: "/alerts" },
    { label: "Reports", icon: <ScrollText />, link: "/reports" },
    { label: "Settings", icon: <UserCog />, link: "/settings" },
  ];

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.full : styles.collapsed}`}>
      <div className={styles.logo}>
        <Monitor className={styles.logoIcon} />
      </div>
      <nav className={styles.nav}>
        <ul>
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link href={item.link} className={styles.card}>
                <span className={styles.icon}>{item.icon}</span>
                <span className={styles.label}>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}