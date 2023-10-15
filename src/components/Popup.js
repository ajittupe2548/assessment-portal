import React, { useEffect } from 'react';

import styles from './scss/Popup.module.scss';
import { addScrollLock, removeScrollLock } from '../utils';

import { CloseRed } from '../assets/icons/CloseRed';

function Popup({ isActive = false, children, floatingContent, onClose }) {
    useEffect(() => {
        isActive ? addScrollLock() : removeScrollLock();

    }, [isActive]);
    return (
        <>
            <div className={styles.container} style={{ transform: isActive ? 'translateY(0)' : 'translateY(110%)' }}>
                <div className={styles.titleWrapper}>
                    Sub-Section Details

                    <span className={styles.closeWrapper} onClick={() => onClose()}>
                        <CloseRed />
                    </span>
                </div>

                <div className={styles.popupContent}>
                    {children}
                </div>
                {
                    floatingContent && <div className={styles.floating}>
                        {floatingContent}
                    </div>
                }
            </div>
            {
                isActive && <div className={styles.overlay} onClick={() => onClose()}></div>
            }

        </>
    )
}

export default Popup