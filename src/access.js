import * as shvl from "shvl";

import * as accessStore from "@/store/accessStore.js";

const Access = {
  install: function(Vue, { store, entityBased = false }) {
    if (!store) {
      throw new Error("Please provide vuex store.");
    }

    store.registerModule("access", accessStore);

    const accessState = store.state.access;

    // * Main Function for `access` directive
    const accessValidator = function(el, binding) {
      let entity = entityBased ? accessState.currentEntity : "all";
      let type = binding.arg;
      let accessId = binding.value;

      console.log(el);

      const permission = shvl.get(accessState, `permissions.${entity}`);
      let allowed = false;
      // Action Comp Tabs Route
      switch (type) {
        case "action":
        case "acts":
          allowed = permission.action.includes(accessId);
          if (!allowed) {
            el.readonly = true;
            el.className += " " + utils.disabledClass;
          }
          break;
        case "components":
        case "comp":
          allowed = permission.comp.includes(accessId);
          console.log(allowed);
          if (!allowed) {
            el.style.display = "none";
          }
          break;
        case "view":
          allowed = permission.view.includes(accessId);
          if (!allowed) {
            el.disabled = "disabled";
            el.className += " " + "disabled";
            el.style.display = "none";
          }
          break;
      }
    };

    // takes the unique access string and checks with the roles value
    Vue.directive("access", {
      inserted: accessValidator,
      update: accessValidator,
    });

    const utils = {
      disabledClass: "v-access-disabled",
      failFunc: function() {
        // store.dispatch("notific/errorMan", { type: "access" });
      },
      passFunc: function() {},
    };

    Vue.directive("global-access", {
      update(el, binding) {
        var accessVals = {}; // user.state.role;
        let access = accessVals.find((acc) => acc.entity == "global");
        let type = binding.arg;
        // Action Comp Tabs Route
        switch (type) {
          case "actions":
          case "acts":
            if (!access.acts.includes(binding.value)) {
              el.readonly = true;
              el.className += " " + utils.failClass;
              el.disabled = true;
            }
            break;
        }
      },
    });

    Vue.directive("access-class", {
      bind(el, binding) {
        if (binding.arg == "fail") utils.failClass = binding.value;
      },
    });

    // emits function if access fails, not implimented
    Vue.directive("access-func", {
      bind(el, binding) {
        if (typeof binding.value !== "function") {
          throw new Error(
            "Directive access-func only takes a function as an argument"
          );
        } else {
          utils.failFunc = binding.value;
        }
      },
    });

    // * Instance Functions for actoins in vuex
    Vue.prototype.$setRole = function(roleName) {
      store.dispatch("access/setUserRole", roleName);
    };
    Vue.prototype.$setAuth = function(authState) {
      store.dispatch("access/setAuthState", authState);
    };
    Vue.prototype.$setCurrentEntity = function(entityName) {
      store.dispatch("access/setCurrentEntity", entityName);
    };
    Vue.prototype.$addEntity = function(entityData) {
      store.dispatch("access/addEntity", entityData);
    };
  },
};

export default Access;
