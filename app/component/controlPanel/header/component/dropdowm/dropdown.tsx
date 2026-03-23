'use client';
import styles from './dropdown.module.scss';
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Dropdown() {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className={styles.dropdown} ref={ref}>
            <button
                className={styles.dropdown__button}
                onClick={() => setOpen(!open)}
            >
                <span>Antan</span>
                <span className={`${styles.icon} ${open ? styles.rotate : ""}`}>
                    <ChevronDown size={15} />
                </span>
            </button>

            <div
                className={`${styles.dropdown__menu} ${open ? styles.show : ""
                    }`}
            >
                <div className={styles.dropdown__item}>Profile</div>
                <div className={styles.dropdown__item}>Settings</div>
                <div className={styles.dropdown__item}>Logout</div>
            </div>
        </div>
    );
}