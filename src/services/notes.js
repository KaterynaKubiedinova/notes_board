import axios from "axios";
import {API_URL} from "../constants/index";

export function getNotes () {
	return axios.get (API_URL)
} 

export function createNote (item) {
	return axios.post (API_URL, item)
}

export function updateNote (item) {
	return axios.put (API_URL + "/" + item.id , item)
}

export function deleteNote (id) {
	return axios.delete (API_URL + "/" + id)
}