import axios from "axios";
import { BASE_URL } from "../assects/strings";

export const API = async (method, endpoint, data, token) => {
    return axios({
        method: method,
        url: `${BASE_URL}/${endpoint}`,
        data: data ? data : undefined,
        params:data,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then((res) => {
           return res
        })
        .catch((error) => {
            return error
        });
}

export const getTasks = (data) => API('get', 'todos', data).then((res) => { return res }).catch((err) => { return err });

