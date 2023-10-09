import React from "react";

import styles from "./scss/NewAssessment.module.scss";

import { Plus } from "../assets/icons/Plus";

function NewAssessMent() {
    return (
        <>
            <div className={styles.container}>
                <span className={styles.iconContainer}>
                    <Plus />
                </span>

                <p className={styles.title}>New Assessment</p>

                <p className={styles.description}>
                    From here you can add questions of multiple types like MCQs,
                    subjective (text or paragraph)!
                </p>
            </div>
        </>
    );
}

export default NewAssessMent;
