import Vue from "vue";
import Vuex from "vuex";

import { projectModule } from "./modules/project.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    projectModule
  }
});