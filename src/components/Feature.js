import React from "react";

import styles from "./scss/Feature.module.scss";

function Feature({ count, growCount, subText }) {
    return (
        <div className={styles.container}>
            <p className={styles.featureCount}>
                {count}
                <span className={styles.addition}>+{growCount}</span>
            </p>
            <p className={styles.subText}>{subText}</p>
        </div>
    );
}

export default Feature;
