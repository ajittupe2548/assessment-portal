import React, { useState } from "react";

import styles from "./scss/Home.module.scss";
import NewAssessment from "../components/NewAssessment";
import Card from "../components/Card";
import Overview from "../components/Overview";
import { assessments } from "./data/assessment";
import ExpandCollapse from "../components/ExpandCollapse";
import Sidebar from "../components/Sidebar";

import { Hamburger } from "../assets/icons/Hamburger";
import { Desktop } from "../assets/icons/Desktop";
import { Search } from "../assets/icons/Search";
import { Filter } from "../assets/icons/Filter";
import { Stats } from "../assets/icons/Stats";

function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);

    const chartClickHandler = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
        setIsOpen(!isOpen);
    };

    const hamburgerClickHandler = () => {
        setShowSidebar(true);
    };

    return (
        <>
            <div className={styles.header}>
                <div
                    className={styles.hamburger}
                    onClick={() => hamburgerClickHandler()}
                >
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
            <Sidebar
                isActive={showSidebar}
                onClose={() => setShowSidebar(false)}
            />
            <div className={styles.mainContent}>
                <ExpandCollapse isOpen={isOpen}>
                    <Overview />
                </ExpandCollapse>
                <div
                    className={styles.subHeadingWrapper}
                    style={{ marginTop: isOpen ? 10 : null }}
                >
                    <h2 className={styles.subHeading}>My Assessment</h2>
                    <div className={styles.filtersWrapper}>
                        <span className={styles.subHeadingIcon}>
                            <Search />
                        </span>
                        <span className={styles.subHeadingIcon}>
                            <Filter />
                        </span>
                        <span
                            className={styles.subHeadingIcon}
                            onClick={() => chartClickHandler()}
                        >
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
