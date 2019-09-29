

function getMinutesAndSecondsFromDurationInSeconds(durationInSeconds) {
    const minutesLeft = Math.floor(durationInSeconds / 60);
    const secondsLeft = Math.floor(durationInSeconds % 60);
    return [minutesLeft, secondsLeft]

}

export default getMinutesAndSecondsFromDurationInSeconds;