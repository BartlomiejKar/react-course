import getMinutesAndSecondsFromDurationInSeconds from "../../lib/time"

describe("getMinutesAndSecondsFromDurationInSeconds", () => {

    test(" works for 30", () => {
        expect(getMinutesAndSecondsFromDurationInSeconds(30)).toEqual([0, 30])
    })

    test("returns 30 seconds for 30 seconds duration ", () => {
        expect(getMinutesAndSecondsFromDurationInSeconds(30)[1]).toBe(30)
    })
    test("returns 0 minutes for 30 seconds duration ", () => {
        expect(getMinutesAndSecondsFromDurationInSeconds(30)[0]).toBe(0)
    })
    test("returns 2minutes 20 seconds for 140 seconds ", () => {
        expect(getMinutesAndSecondsFromDurationInSeconds(140)).toEqual([2, 20])
    })
    test("returns 1 minutes for 60 seconds", () => {
        expect(getMinutesAndSecondsFromDurationInSeconds(60)[0]).toBe(1)
    })
})