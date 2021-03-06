import React from 'react';
import "./Clock.css"
import PropTypes from "prop-types"
function Clock({
    className = "",
    hours,
    minutes,
    seconds,
    miliseconds
}) {
    return (
        <h2 className={"Clock " + className}>
            Pozostało {Hours(hours)}:{Minutes(minutes)}:{Seconds(seconds)}:
{Miliseconds(miliseconds)}
        </h2>
    );
}
function Hours(hours) {
    const TimeHours = hours < 0 ? `00` : hours < 10 ? `0${hours}` : hours;
    return `${TimeHours}`;
}

function Minutes(minutes) {
    const TimeMinutes =
        minutes < 0 ? `00` : minutes < 10 ? `0${minutes}` : minutes;
    return `${TimeMinutes}`;
}
function Seconds(seconds) {
    const TimeSeconds =
        seconds < 0 ? `00` : seconds < 10 ? `0${seconds}` : seconds;
    return `${TimeSeconds}`;
}
function Miliseconds(miliseconds) {
    const TimeMiliseconds =
        miliseconds < 0
            ? `00`
            : miliseconds < 10
                ? `0${miliseconds}`
                : miliseconds;
    return `${TimeMiliseconds}`;
}

Clock.defaultProps = {
    className: "",
    hours: 0,
    minutes: 0,
    seconds: 0,
    miliseconds: 0
}
Clock.propTypes = {
    className: PropTypes.string.isRequired,
    hours: PropTypes.number.isRequired,
    minutes: PropTypes.number.isRequired,
    seconds: PropTypes.number.isRequired,
    miliseconds: PropTypes.number.isRequired
}

export default Clock;