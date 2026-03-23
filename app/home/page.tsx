import React from 'react';
import styles from './home.module.scss';
import { BrickWall, CirclePile, Drill, HandCoins, House, Monitor, PersonStanding, Presentation, ReceiptIndianRupee, ScrollText, Siren, UmbrellaOff, UserCog } from "lucide-react";
import Link from 'next/link';
import Projects from './component/projects/projects';

export default function HomePage() {

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
    <div className={styles.home}>
      <div className={styles.menuCard}>
        {
          menuItems.map((item) => ( 
            <Link key={item.label} href={item.link} className={styles.card}>
                <div className={styles.icon}>{item.icon}</div>
                <div className={styles.text}>{item.label}</div>
            </Link>
          ))

        }
      </div>
      <div className={styles.dash}>
        <Projects />
      </div>
    </div>
  );
}