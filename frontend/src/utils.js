import  {toast} from 'react-toastify'
export const API_URL = 'http://localhost:5000'


export const notify = (message, type) => {
    toast[type] (message);
}


