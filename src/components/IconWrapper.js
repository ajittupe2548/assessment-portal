import React from "react";

import styles from "./scss/IconWrapper.module.scss";

function IconWrapper({ svg, bgColor }) {
    return (
        <span className={styles.wrapper} style={{ backgroundColor: bgColor }}>
            {svg}
        </span>
    );
}

export default IconWrapper;
