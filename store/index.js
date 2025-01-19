import axios from 'axios';

const baseUrl = process.env.BASE_URL;

export const state = () => ({
  user: {},
});

export const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
  CLEAR_USER(state) {
    state.user = {};
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
    }
  },
};
