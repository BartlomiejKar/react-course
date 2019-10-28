const URL = "http://localhost:3006"
const FetchAuthenticationApi = {

    login: async function (credentials) {
        const response = await makeRequest(`${URL}/login`, "POST", credentials)
        const result = await response.json();
        return result;
    }

}



export default FetchAuthenticationApi;

async function makeRequest(url, method, body) {
    const jsonBody = body ? JSON.stringify(body) : undefined;
    const response = await window.fetch(url, {
        method,
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonBody
    });
    if (!response.ok) {
        new Error("Coś poszło nie tak z fetch Api")
    }
    return response;
}