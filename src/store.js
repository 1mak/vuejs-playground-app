import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    messages: [
      {
        title: "This is a message in teal color",
        color: "#006699",
      },
      {
        title: "This is a message in green color",
        color: "#349233",
      },
      {
        title: "This is a message in orange color",
        color: "#FF9123",
      },
    ],
  },
  mutations: {
    UPDATE_MESSAGES(state, payload) {
      state.messages = payload;
    },
  },
  actions: {
    updateMessages({ commit }, payload) {
      commit("UPDATE_MESSAGES", payload);
    },
  },
  getters: {
    getColoredMessages(state) {
      return state.messages.map(
        (message) =>
          `<strong style="color: ${message.color}">${message.title}</strong>`
      );
    },
    getTextOnlyMessages(state) {
      return state.messages.map((message) => message.title);
    },
  },
});
