import React from "react";

import IconWrapper from "./IconWrapper";
import styles from "./scss/Card.module.scss";

import { Bag } from "../assets/icons/Bag";
import { Clock } from "../assets/icons/Clock";
import { Options } from "../assets/icons/Options";
import { LinkBlack } from "../assets/icons/LinkBlack";

function Card({
    name,
    purpose,
    date,
    duration,
    questions,
    link,
    attemptedUsers,
}) {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <IconWrapper svg={<Bag />} bgColor="#EBE8FD" />
                <div>
                    <p className={styles.title}>{name}</p>
                    <p className={styles.jobDateContainer}>
                        <span>{purpose}</span>
                        <span className={styles.divider}></span>
                        <span className={styles.dateContainer}>
                            <Clock />
                        </span>
                        <span className={styles.date}>{date}</span>
                    </p>
                </div>
                <span className={styles.options}>
                    <Options />
                </span>
            </div>
            <div className={styles.infoWrapper}>
                <div>
                    <span className={styles.detailsWrapper}>
                        <span className={styles.detailCount}>
                            {duration}
                        </span>
                        <span>Duration</span>
                    </span>
                    <span className={styles.detailsWrapper}>
                        <span className={styles.detailCount}>
                            {questions}
                        </span>
                        <span>Questions</span>
                    </span>
                </div>
                <div className={styles.additionalInfo}>
                    <a href={link} target="_blank" className={styles.share}>
                        <span className={styles.linkContainer}>
                            <LinkBlack />
                        </span>
                        Share
                    </a>
                    {attemptedUsers.length > 0 && (
                        <>
                            <span
                                style={{
                                    width:
                                        attemptedUsers.slice(0, 3).length *
                                        20,
                                }}
                                className={styles.userIconWrapper}
                            >
                                {attemptedUsers
                                    .slice(0, 3)
                                    .map((item, idx) => (
                                        <span
                                            key={idx}
                                            style={{
                                                position: "absolute",
                                                right: (attemptedUsers.slice(0, 3).length - 1) * 15 - 15 * idx,
                                                backgroundColor: idx === 0 ? '#6548EE' : idx === 1 ? '#3079E1' : '#E9407A'
                                            }}
                                            className={`${styles.userIcon}`}
                                        >{`${item.firstName[0]}${item.lastName[0]}`}</span>
                                    ))}
                            </span>
                            {attemptedUsers.length > 3 && (
                                <span className={styles.userCount}>
                                    +{attemptedUsers.length - 3}
                                </span>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Card;
