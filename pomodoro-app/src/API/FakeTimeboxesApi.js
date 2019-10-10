import uuid from "uuid";

function wait(ms = 1000) {
    return new Promise(
        (resolve) => {
            setTimeout(resolve, ms)
        }
    )
}

const timeboxes = [
    { "id": uuid.v4(), "title": "kurs React", "totalTimes": 10 },
    { "id": uuid.v4(), "title": "kontrolowanie komponentow", "totalTimes": 15 },
    { "id": uuid.v4(), "title": "przekazywanie stanu w gore", "totalTimes": 20 }
]

function findIndexByAnyId(id) {
    const result = timeboxes.findIndex((timebox) => timebox.id === id)
    if (result < 0) {
        new Error("timebox o podanym id nie istnieje")
    }
    return result
}

const FakeTimeboxesAPI = {
    getAllTimeboxes: async function () {
        await wait(1000);
        console.log("GET all", timeboxes)
        return [...timeboxes]

    },
    addTimebox: async function (timeboxToAdd) {
        await wait(1000);
        const addedTimebox = { ...timeboxToAdd, id: uuid.v4(), }
        timeboxes.push(addedTimebox)
        console.log("post", timeboxes)
    },
    replaceTimebox: async function (timeboxToReplace) {
        await wait(500);
        if (!timeboxToReplace.id) {
            new Error("błędny index timeboxa")
        }
        const index = findIndexByAnyId(timeboxToReplace.id)
        const replacedTimebox = { ...timeboxToReplace }
        timeboxes[index] = replacedTimebox
        console.log("put", timeboxes)
        return replacedTimebox
    },
    removeTimebox: async function (timeboxToRemove) {
        await wait(500);
        if (!timeboxToRemove) {
            new Error("błędny index timeboxa")
        }
        const index = findIndexByAnyId(timeboxToRemove.id)
        timeboxes.splice(index, 1)
        console.log("delete", timeboxes)


    }

}

export default FakeTimeboxesAPI;