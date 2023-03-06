import { sendRequest } from "../request";
const BASE_URL = '/api/patent';


export function getPatent(patentId){
    console.log('PatentId from utils Api: ', patentId)
    // const BASE_URL = `/api/patent/${patentId}`;
    return sendRequest(BASE_URL);
}

export function postPatentId(formData){
    console.log('Post from utils Api: ', formData)
    return sendRequest(`${BASE_URL}/patentId`, "post", formData);
}