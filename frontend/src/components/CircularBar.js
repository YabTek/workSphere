import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import 'animate.css/animate.min.css';

const CircularBar = ({jobTitle}) => {
  const value = 0
  const getProgressBarColor = (percentage) => {
    if (percentage < 25) {
      return 'red';
    } else if (percentage >= 25 && percentage <= 70) {
      return 'blue';
    } else {
      return 'green';
    }
  };
  const color = getProgressBarColor(value);
  return (
    <div>
            <h2>{jobTitle}</h2>
           <div style={{ width: '10%', margin: 'auto' }}>
            <CircularProgressbar
              value={value}
              text={`${value}%`}
              styles={buildStyles({
                rotation: 0.25,
                pathColor: color,
                textColor: color,
              })}
            />
                </div>
          </div>
  )
}

export default CircularBar
