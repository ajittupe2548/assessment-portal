import React, { useRef, useState, useEffect } from 'react';

import styles from './scss/ExpandCollapse.module.scss';

function ExpandCollapse({ isOpen = true, shouldShowBtn = false, children }) {
    const [isExpanded, setIsExpanded] = useState(isOpen);
    const actualHeight = useRef(null);
    const wrapperRef = useRef();

    useEffect(() => {
        const innerHeight = wrapperRef.current.clientHeight;
        actualHeight.current = innerHeight;
    }, []);

    useEffect(() => {
        setIsExpanded(isOpen);
    }, [isOpen]);

    return (
        <>
            <div className={styles.container} style={{ height: isExpanded ? actualHeight.current : 0 }}>
                <div ref={wrapperRef}>{children}</div>
            </div>
            {
                shouldShowBtn && <p className={styles.button} onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? 'Collapse' : 'Expand'}</p>
            }
        </>
    );
};

export default ExpandCollapse;