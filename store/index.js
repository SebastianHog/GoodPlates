import axios from 'axios';

const baseUrl = process.env.BASE_URL;

export const state = () => ({
  user: {},
  currentPage: 'home',
});

export const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
  CLEAR_USER(state) {
    state.user = {};
  },
  SET_CURRENT_PAGE(state, page) {
    state.currentPage = page;
  },
};

export const actions = {
  async fetchUser({ commit }) {
    try {
      const response = await axios.get(`${baseUrl}api/user/data`, {
        withCredentials: true,
      });
      commit('SET_USER', response.data);
      return response.data.User;
    } catch (error) {
      console.error('Failed to fetch user:', error);
      return {
        username: 'Username',
      };
    }
  },
  setCurrentPage({ commit }, page) {
    commit('SET_CURRENT_PAGE', page);
    console.log('Current page:', page);
  },
};
