import React, { useState } from "react";

import styles from "./scss/NewAssessment.module.scss";
import Popup from "./Popup";

import { Plus } from "../assets/icons/Plus";

function NewAssessMent() {
    const [isPopupActive, setIsPopupActive] = useState(false);
    const initialAssessmentData = {
        name: '',
        purpose: 'job',
        date: '',
        duration: 60,
        questions: 30,
        link: ''
    };
    const [assessmentData, setAssessmentData] = useState({ ...initialAssessmentData });

    const handleInputChange = (e) => {
        setAssessmentData({ ...assessmentData, [e.target.dataset.val]: e.target.value });
    };

    const handleNewAssessmentClick = () => {
        setIsPopupActive(true);
    }

    const poupClose = () => {
        setIsPopupActive(false);
    }

    const handleSubmitClick = () => {
        const { name, purpose, date, duration, questions, link } = assessmentData;
        if (name && purpose && date && duration && questions && link) {
            alert('Data add successfully!')
        }
        else {
            alert('Enter valid data!')
        }
    }

    return (
        <>
            <div className={styles.container}>
                <span onClick={() => handleNewAssessmentClick()} className={styles.iconContainer}>
                    <Plus />
                </span>

                <p className={styles.title}>New Assessment</p>

                <p className={styles.description}>
                    From here you can add questions of multiple types like MCQs,
                    subjective (text or paragraph)!
                </p>
            </div>

            <Popup isActive={isPopupActive} onClose={poupClose} floatingContent={<button className={styles.submit} onClick={() => handleSubmitClick()}>Submit</button>}>
                <label className={styles.formLabel} htmlFor="assessment-name">Name of Assesment</label>
                <input className={styles.formItem} type="text" value={assessmentData.name} data-val="name" onChange={handleInputChange} placeholder="Type Name" id="assessment-name" />

                <label className={styles.formLabel} htmlFor="assessment-purpose">Purpose of the test is</label>
                <select data-val="purpose" onChange={handleInputChange} className={`${styles.formItem} ${styles.select} `} value={assessmentData.purpose} id="assessment-purpose">
                    <option value="job">Job</option>
                    <option value="practice">Practice</option>
                </select>

                <label className={styles.formLabel} htmlFor="assessment-date">Date</label>
                <input className={`${styles.formItem} ${styles.date}`} type="date" value={assessmentData.date} data-val="date" onChange={handleInputChange} id="assessment-date" />

                <label className={styles.formLabel} htmlFor="assessment-duration">Duration of Assesment</label>
                <input className={styles.formItem} type="number" value={assessmentData.duration} data-val="duration" onChange={handleInputChange} placeholder="Type Name" id="assessment-duration" />

                <label className={styles.formLabel} htmlFor="assessment-questions">Questions of Assesment</label>
                <input className={styles.formItem} type="number" value={assessmentData.questions} data-val="questions" onChange={handleInputChange} placeholder="Type Name" id="assessment-questions" />

                <label className={styles.formLabel} htmlFor="assessment-link">Questions of Assesment</label>
                <input className={styles.formItem} type="text" value={assessmentData.link} data-val="link" onChange={handleInputChange} placeholder="Add Link" id="assessment-link" />
            </Popup>
        </>
    );
}

export default NewAssessMent;
