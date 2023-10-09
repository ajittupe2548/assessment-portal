import React from "react";

import styles from "./scss/Overview.module.scss";
import Feature from "./Feature";
import IconWrapper from "./IconWrapper";

import { Link } from "../assets/icons/Link";
import { Person } from "../assets/icons/Person";
import { Web } from "../assets/icons/Web";
import { Equal } from "../assets/icons/Equal";

function Overview() {
    return (
        <div className={styles.container}>
            <div className={styles.resultContainer}>
                <div className={styles.assessment}>
                    <p className={styles.title}>Total Assessment</p>
                    <div className={styles.resultWrapper}>
                        <IconWrapper svg={<Equal />} bgColor="#EBE8FD" />
                        <span className={styles.assessmentCount}>34</span>
                    </div>
                </div>
                <div className={styles.purpose}>
                    <p className={styles.title}>Total Assessment</p>
                    <div className={styles.resultWrapper}>
                        <IconWrapper svg={<Link />} bgColor="#E5F1FC" />
                        <span className={styles.assessmentCount}>11</span>
                    </div>
                </div>
            </div>
            <div className={styles.candidates}>
                <p className={styles.title}>Candidates</p>
                <div className={styles.candidatesInfo}>
                    <IconWrapper svg={<Person />} bgColor="#EBE8FD" />
                    <Feature
                        count="11,145"
                        growCount="89"
                        subText="Total Candidate"
                    />
                    <div className={styles.divider}></div>
                    <Feature
                        count="115"
                        growCount="85"
                        subText="Who attempted"
                    />
                </div>
            </div>
            <div className={styles.source}>
                <p className={styles.title}>Candidate source</p>
                <div className={styles.candidatesInfo}>
                    <IconWrapper svg={<Web />} bgColor="#FCE8EF" />
                    <Feature count="11,000" growCount="78" subText="E-mail" />
                    <div className={styles.divider}></div>
                    <Feature
                        count="15,000"
                        growCount="56"
                        subText="Social Share"
                    />
                    <div className={styles.divider}></div>
                    <Feature
                        count="5,000"
                        growCount="45"
                        subText="Unique Link"
                    />
                </div>
            </div>
        </div>
    );
}

export default Overview;
