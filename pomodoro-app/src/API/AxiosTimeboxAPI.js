import axios from 'axios';



const URL = `http://localhost:3006/timeboxes`
const AxiosApiTimeboxes = {
    getAllTimeboxes: async function () {
        const response = await axios.get(URL)
        const timeboxes = response.data
        return timeboxes

    },
    addTimebox: async function (timeboxToAdd) {
        const response = await axios.post(URL, timeboxToAdd)
        const addedTimebox = response.data
        return addedTimebox
    },
    replaceTimebox: async function (timeboxToReplace) {
        const response = await axios.put(`${URL}/${timeboxToReplace.id}`, timeboxToReplace)
        const replacedTimebox = response.data
        return replacedTimebox
    },
    removeTimebox: async function (timeboxToRemove) {
        if (!timeboxToRemove.id) {
            new Error("błędne id timeboxa")
        }
        await axios.delete(`${URL}/${timeboxToRemove.id}`)

    }
}



export default AxiosApiTimeboxes;

