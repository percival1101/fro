import axios from "axios";

const backEnd = 'https://readw.onrender.com/' // 'http://localhost:5000/'

export const saveFullStory = async () => {
    try {
        const response = await axios.get(backEnd);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // Rethrow the error to be handled by the calling function
    }
}
