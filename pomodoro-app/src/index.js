import React from 'react';
import ReactDOM from 'react-dom';
import uuid from "uuid"
class EditorTimeable extends React.Component {
    state = {
        title: "Uczę się Reacta",
        times: "20",
        isEditable: true
    };
    handleChangeTitle = e => {
        this.setState({
            title: e.target.value
        });
    };
    handleChangeTimes = e => {
        this.setState({
            times: e.target.value
        });
    };
    handleChangeOnConfirm = () => {
        this.setState({
            isEditable: false
        });
    };
    handleChangeEditable = () => {
        this.setState({
            isEditable: true
        });
    };

    render() {
        const { title, times, isEditable } = this.state;
        return (
            <>
                <TimeboxEditor
                    title={title}
                    times={times}
                    onChangeTitle={this.handleChangeTitle}
                    onChangeTimes={this.handleChangeTimes}
                    onConfirm={this.handleChangeOnConfirm}
                    Editable={isEditable}
                />
                <CurrentTimebox
                    changeEditable={this.handleChangeEditable}
                    title={title}
                    times={times}
                    Editable={isEditable}
                />
            </>
        );
    }
}

function TimeboxEditor(props) {
    const {
        title,
        times,
        onChangeTitle,
        onChangeTimes,
        Editable,
        onConfirm
    } = props;
    return (
        <div className={`TimeboxEditor ${Editable ? "" : "inactive"}`}>
            <label>
                Co robisz?
<input
                    disabled={!Editable}
                    onChange={onChangeTitle}
                    defaultValue={title}
                    type="text"
                />
            </label>{" "}
            <br />
            <label>
                Ile minut?
<input
                    disabled={!Editable}
                    onChange={onChangeTimes}
                    defaultValue={times}
                    type="number"
                />
            </label>
            <br />
            <button
                disabled={!Editable}
                onClick={onConfirm}
                className="TimeboxEditor_button"
            >
                Zacznij
</button>
        </div>
    );
}

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

function Clock({
    className = "",
    hours = 0,
    minutes = 0,
    seconds = 0,
    miliseconds = 0
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

// function ProgressBar({className = "", percent, fullPercent}) {
//     return (
//      <div className={"ProgressBar " + className}>
//                 <div style={{width:`calc(${fullPercent}% - ${percent}%)`}}>
//                 </div>
//             </div>
//     )

// }
function ProgressBar({ className = "", percent }) {
    return (
        <div className={"ProgressBar " + className}>
            <div style={{ width: `${percent}%` }}></div>
        </div>
    );
}

function TimeboxCreator(props) {
    const { CreateTimebox } = props;
    return (
        <div className="TimeboxCreator">
            <label>
                Co robisz?
<input type="text" />
            </label>{" "}
            <br />
            <label>
                Ile minut?
<input type="number" />
            </label>
            <br />
            <button className="TimeboxEditor_button" onClick={CreateTimebox}>
                Dodaj nowy Timebox
</button>
        </div>
    );
}

class TimeboxList extends React.Component {
    state = {
        timeboxes: [
            { id: uuid.v4(), title: "kurs React", totalTimes: 10 },
            { id: uuid.v4(), title: "kontrolowanie komponentow", totalTimes: 15 },
            { id: uuid.v4(), title: "przekazywanie stanu w gore", totalTimes: 20 }
        ]
    };
    removeTimebox = indexToRemove => {
        this.setState(prevState => {
            const timeboxes = prevState.timeboxes.filter(
                (item, index) => index !== indexToRemove
            );
            return { timeboxes };
        });
    };
    addTimebox = item => {
        this.setState(prevState => {
            const timeboxes = [item, ...prevState.timeboxes];
            return { timeboxes };
        });
    };
    updateTimebox = (indexUptade, updateTimebox) => {
        this.setState(prevState => {
            const timeboxes = prevState.timeboxes.map((item, index) =>
                index === indexUptade ? updateTimebox : item
            );
            return { timeboxes };
        });
    };

    handleCreateTimebox = () => {
        this.addTimebox({
            id: uuid.v4(),
            title: "nowy timebox",
            totalTimes: 15
        });
    };
    render() {
        return (
            <>
                <TimeboxCreator CreateTimebox={this.handleCreateTimebox} />
                {this.state.timeboxes.map((item, index) => (
                    <Timebox
                        key={item.id}
                        onEdit={() =>
                            this.updateTimebox(index, {
                                ...item,
                                title: "update timebox"
                            })
                        }
                        onDelete={() => this.removeTimebox(index)}
                        title={item.title}
                        totalTimes={item.totalTimes}
                    />
                ))}
            </>
        );
    }
}

function Timebox({ title, totalTimes, onEdit, onDelete, index }) {
    return (
        <div key={index} className="Timebox">
            <h3>
                {title} - {totalTimes}
            </h3>
            <button onClick={onEdit}>Edytuj</button>
            <button onClick={onDelete}>Usun</button>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <TimeboxList />
        </div>
    );
}

const root = document.getElementById("root");

ReactDOM.render(<App />, root);