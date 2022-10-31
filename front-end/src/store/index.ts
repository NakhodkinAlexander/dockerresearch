import { createStore } from "vuex";
import { DataBaseName } from "../types";

export default createStore({
  state: {
    databases: [] as DataBaseName[],
  },
  getters: {},
  mutations: {
    setDatabases(state, databases: DataBaseName[]) {
      state.databases = databases;
    },
  },
  actions: {
    async loadDatabases(context) {
      fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }

          throw new Error("Network response was not ok");
        })
        .then((response) => {
          context.commit("setDatabases", response as DataBaseName);
        })
        .catch((error) => {
          context.commit("setDatabases", ["1", "2", "3"]);
          console.log(error);
        });
    },
  },
  modules: {},
});
