export const namespaced = true;

export const state = {
  roleName: "",
  permissions: {
    all: {
      view: [],
      comp: [],
      action: ["access2"],
    },
    home: {
      view: [],
      comp: [],
      action: ["access1"],
    },
  },
};

export const mutations = {};

export const getters = {};
