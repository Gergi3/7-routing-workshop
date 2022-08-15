import * as api from '../api/requester';

const endpoints = {
    getAll: '/data/games',
}

export const getAll = () => {
    return api.get(endpoints.getAll);
};
