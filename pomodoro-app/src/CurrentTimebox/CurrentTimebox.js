import React from 'react';
import Clock from "../Clock/Clock";
import ProgressBar from "../ProgressBar/ProgressBar"
import "./CurrentTimebox.css"
class CurrentTimebox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isRunning: false,
            isPaused: false,
            pausesCount: 0,
            timeInSeconds: 0
        };

        this.handleStart = this.handleStart.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.handlePause = this.handlePause.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.startTimer = this.startTimer.bind(this);
    }
    componentWillUnmount() {
        this.stopTimer()
        console.count("usunalem stop timer")
    }

    handleStart(event) {
        this.setState({
            isRunning: !this.state.isRunning
        });
        this.startTimer();
    }
    handleStop(event) {
        this.setState({
            isRunning: false,
            isPaused: false,
            pausesCount: 0,
            timeInSeconds: 0
        });
        this.stopTimer();
    }

    startTimer() {

        this.IntervalId = window.setInterval(() => {
            console.log("liczy")
            this.setState(prevState => ({
                timeInSeconds: prevState.timeInSeconds + 0.1
            }));
        }, 100);
    }

    stopTimer() {
        window.clearInterval(this.IntervalId);
    }

    handlePause() {
        this.setState(function (prevState) {
            const isPaused = !prevState.isPaused;
            if (isPaused) {
                this.stopTimer();
            } else {
                this.startTimer();
            }
            return {
                isPaused,
                pausesCount: isPaused
                    ? prevState.pausesCount + 1
                    : prevState.pausesCount
            };
        });
    }

    render() {
        const { title, times, changeEditable, Editable } = this.props;
        const { timeInSeconds, isRunning, isPaused, pausesCount } = this.state;
        const totalTimesInSeconds = times * 60;
        const timeLeftInSeconds = totalTimesInSeconds - timeInSeconds;
        const minutesLeft = Math.floor(timeLeftInSeconds / 60);
        const secondsLeft = Math.floor(timeLeftInSeconds % 60);
        const progressPercent = (timeInSeconds / totalTimesInSeconds) * 100;
        return (
            <div className={`CurrentTimebox ${Editable ? "inactive" : ""}`}>
                <h1>{title}</h1>
                <Clock
                    minutes={minutesLeft}
                    seconds={secondsLeft}
                    className={isPaused ? "inactive" : ""}
                />
                <ProgressBar
                    percent={progressPercent}
                    className={isPaused ? "inactive" : ""}
                />
                <button onClick={this.handleStart} disabled={isRunning}>
                    Start
</button>
                <button onClick={this.handleStop} disabled={!isRunning}>
                    Stop
</button>
                <button onClick={this.handlePause} disabled={!isRunning}>
                    {isPaused ? "Wznów" : "Pauza"}
                </button>
                <button onClick={changeEditable}>Zmień</button>
                <p>Pozostało prób: {pausesCount}</p>
            </div>
        );
    }
}
export default CurrentTimebox;