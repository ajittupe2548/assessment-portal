import React from "react";

import styles from "./scss/Home.module.scss";
import NewAssessment from "../components/NewAssessment";
import Card from "../components/Card";
import Overview from "../components/Overview";
import { assessments } from "./data/assessment";

import { Hamburger } from "../assets/icons/Hamburger";
import { Desktop } from "../assets/icons/Desktop";
import { Search } from "../assets/icons/Search";
import { Filter } from "../assets/icons/Filter";
import { Stats } from "../assets/icons/Stats";

function Home() {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.hamburger}>
                    <Hamburger />
                </div>
                <h1 className={styles.headingWrapper}>Assessment</h1>
                <div className={styles.desktopIconWrapper}>
                    <Desktop />
                </div>
            </div>
            <div className={styles.tabs}>
                <div className={styles.activeTab}>My Assessments</div>
                <div>Unstop Assessment</div>
            </div>
            <div className={styles.mainContent}>
                <Overview />
                <div className={styles.subHeadingWrapper}>
                    <h2 className={styles.subHeading}>My Assessment</h2>
                    <div className={styles.filtersWrapper}>
                        <span className={styles.subHeadingIcon}>
                            <Search />
                        </span>
                        <span className={styles.subHeadingIcon}>
                            <Filter />
                        </span>
                        <span className={styles.subHeadingIcon}>
                            <Stats />
                        </span>
                    </div>
                </div>
                <NewAssessment />
                {assessments.map((item, idx) => (
                    <Card
                        name={item.name}
                        purpose={item.purpose}
                        date={item.date}
                        key={idx}
                        duration={item.duration}
                        questions={item.questions}
                        link={item.link}
                        attemptedUsers={item.attemptedUsers}
                    />
                ))}
            </div>
        </>
    );
}

export default Home;
