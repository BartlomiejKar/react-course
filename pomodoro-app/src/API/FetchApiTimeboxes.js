const URL = "http://localhost:3006/timeboxes"
const FetchApiTimeboxes = {
    getAllTimeboxes: async function (accessToken) {
        const response = await makeRequest(`${URL}`, "GET", null, accessToken)
        if (!response.ok) {
            new Error("Coś poszło nie tak z fetch Api")
        }
        const timeboxes = await response.json()
        return timeboxes

    },
    addTimebox: async function (timeboxToAdd, accessToken) {
        const response = await makeRequest(`${URL}`, "POST", timeboxToAdd, accessToken)
        const addedTimebox = await response.json()
        return addedTimebox
    },
    replaceTimebox: async function (timeboxToReplace, accessToken) {
        if (!timeboxToReplace.id) {
            new Error("błędne id timeboxa")
        }
        const response = await makeRequest(`${URL}/${timeboxToReplace.id}`, "PUT", timeboxToReplace, accessToken)
        const replacedTimebox = await response.json()
        return replacedTimebox
    },
    removeTimebox: async function (timeboxToRemove, accessToken) {
        if (!timeboxToRemove.id) {
            new Error("błędne id timeboxa")
        }
        await makeRequest(`${URL}/${timeboxToRemove.id}`, "DELETE", null, accessToken)
    }
}



export default FetchApiTimeboxes;

async function makeRequest(url, method, body, accessToken) {
    const jsonBody = body ? JSON.stringify(body) : undefined
    const headers = {
        "Content-Type": "application/json"
    }
    if (accessToken) {
        headers["Authorization"] = `Bearer ${accessToken}`
    }

    const response = await window.fetch(url, {
        method,
        headers,
        body: jsonBody
    })
    if (!response.ok) {
        new Error("Coś poszło nie tak z fetch Api")
    }
    return response
}