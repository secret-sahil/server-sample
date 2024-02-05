import axios from 'axios';

axios.defaults.baseURL = import.meta.env.REACT_APP_SERVER_DOMAIN;
/** Make API Requests */    

/** Upload function */
export async function UploadToDB({ file }){
    try {
        if(file){
            const { data } = await axios.post('/api/upload', { file })
            return Promise.resolve({ data });
        }
    } catch (error) {
        return Promise.reject({ error : "Invalid file type."})
    }
}