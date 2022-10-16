import React from 'react';
import styles from './TodoDate.module.css';

const TodoDate = (props) => {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit', timezone: 'America/New_York' });
    const year = props.date.getFullYear();
    const todayNum = Math.ceil(new Date() / (1000*60*60*24));
    const dueDateNum = Math.ceil(props.date / (1000*60*60*24));
    const timeLeft = dueDateNum - todayNum;
    const daysLeft = timeLeft;
    const weeksLeft = Math.floor(timeLeft/7);
    let dateMessage;
    let dateClasses;
    if (daysLeft < 0) {
        dateMessage = 'Overdue'
        dateClasses = styles.overdue;
    } else if (daysLeft === 0) {
        dateMessage = 'Due today';
        dateClasses = styles['due-today'];
    } else if (daysLeft === 1) {
        dateMessage = `Tomorrow`;
        dateClasses = styles['due-soon'];
    } else if (daysLeft > 1 && daysLeft < 7) {
        dateMessage = `${daysLeft} days left`;
        dateClasses = styles['due-soon'];
    } else if (daysLeft >= 7 && daysLeft < 14) {
        dateMessage = `${weeksLeft} week left`;
    } else {
        dateMessage = `${weeksLeft} weeks left`;
    }
  return (
    <>
    <h4>{month} {day}, {year}</h4>
    <div className={dateClasses}>{dateMessage}</div>
    </>
  )
}

export default TodoDate