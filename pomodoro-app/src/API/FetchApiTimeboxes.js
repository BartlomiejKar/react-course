const URL = `http://localhost:3006/timeboxes`
const FetchApiTimeboxes = {
    getAllTimeboxes: async function () {
        const response = await makeRequest(`${URL}`, "GET")
        if (!response.ok) {
            new Error("Coś poszło nie tak z fetch Api")
        }
        const timeboxes = await response.json()
        return timeboxes

    },
    addTimebox: async function (timeboxToAdd) {
        const response = await makeRequest(`${URL}`, "POST", timeboxToAdd)
        const addedTimebox = await response.json()
        return addedTimebox
    },
    replaceTimebox: async function (timeboxToReplace) {
        if (!timeboxToReplace.id) {
            new Error("błędne id timeboxa")

        }

        const response = await makeRequest(`${URL}/${timeboxToReplace.id}`, "PUT", timeboxToReplace)
        const replacedTimebox = await response.json()
        return replacedTimebox
    },
    removeTimebox: async function (timeboxToRemove) {
        if (!timeboxToRemove.id) {
            new Error("błędne id timeboxa")
        }
        await makeRequest(`${URL}/${timeboxToRemove.id}`, "DELETE", timeboxToRemove)
    }
}



export default FetchApiTimeboxes;

async function makeRequest(url, method, body) {
    const jsonBody = body ? JSON.stringify(body) : undefined
    const response = await window.fetch(url, {
        method,
        headers: {
            "Content-Type": "applications/json"
        },
        body: jsonBody
    })
    if (!response.ok) {
        new Error("Coś poszło nie tak z fetch Api")
    }
    return response
}