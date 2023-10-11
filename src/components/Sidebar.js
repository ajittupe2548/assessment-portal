import React, { useEffect } from 'react';

import styles from './scss/Sidebar.module.scss';
import { addScrollLock, removeScrollLock } from '../utils';

import { Close } from '../assets/icons/Close';
import { Dashboard } from '../assets/icons/Dashboard';
import { Library } from '../assets/icons/Library';
import { Assessment } from '../assets/icons/Assessment';
import { RoundStatus } from '../assets/icons/RoundStatus';

function Sidebar({ isActive = false, onClose }) {

    useEffect(() => {
        isActive ? addScrollLock() : removeScrollLock();

    }, [isActive]);

    return (
        <>
            <div className={styles.container} style={{ transform: isActive ? 'translateX(0)' : null }}>
                <div className={styles.title}>
                    Menu
                    <span className={styles.closeWrapper}
                        onClick={() => onClose()}><Close /></span>
                </div>
                <ul>
                    <li className={styles.navItem}>
                        <span className={styles.navIconWrapper}><Dashboard /></span>
                        Dashboard
                    </li>
                    <li className={styles.navItem}>
                        <span className={styles.navIconWrapper}><Assessment /></span>
                        Assessment
                    </li>
                    <li className={styles.navItem}>
                        <span className={styles.navIconWrapper}><Library /></span>
                        My Library
                    </li>
                </ul>
                <div className={styles.divider}></div>
                <div className={styles.navItem}>
                    <span className={styles.navIconWrapper}><RoundStatus /></span>
                    Round Status
                    <span className={styles.adminBadge}>Admin</span>
                </div>
            </div>
            {
                isActive && <div className={styles.overlay} onClick={() => onClose()}></div>
            }
        </>
    )
}

export default Sidebar;