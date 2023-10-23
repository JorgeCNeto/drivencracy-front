import axios from "axios";

/**
 * Lista todas as enquetes
 */
export function getPolls() {
    return axios.get(`${process.env.BACK_END_URL}/poll`);
}


/**
 * Mostra o resultado de uma enquete
 */
export function getPollResult(pollId) {
    return axios.get(`${process.env.BACK_END_URL}/poll/${pollId}/result`);
}


/**
 * Cria uma nova enquete
 */
export function postPoll(body) {
    return axios.post(`${process.env.BACK_END_URL}/poll`, body)
}
