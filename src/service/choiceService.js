import axios from "axios";


/**
 * Lista todas as opções de uma enquete
 */
export function getPollChoices(pollId) {
    return axios.get(`${process.env.BACK_END_URL}/poll/${pollId}/choice`);
}


/**
 * Cria uma opção da enquete
 */
export function postChoice(body) {
    return axios.post(`${process.env.BACK_END_URL}/choice`, body)
}


/**
 * Vota em uma opção da enquete
 */
export function voteChoice(choiceId) {
    return axios.post(`${process.env.BACK_END_URL}/choice/${choiceId}/vote`)
}
