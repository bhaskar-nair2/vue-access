import * as shvl from "shvl";

import * as accessStore from "@/store/accessStore.js";

const Access = {
  install: function(Vue, { store, router, entityBased = false }) {
    if (!store) {
      throw new Error("Please provide vuex store.");
    }
    if (!router) {
      throw new Error("Please provide vuex store.");
    }

    store.registerModule("access", accessStore);

    const accessState = store.state.access;

    // takes the unique access string and checks with the roles value
    Vue.directive("access", {
      inserted(el, binding) {
        console.log(accessState);
        let entity = entityBased ? router.currentRoute.meta.entity : "all";
        let type = binding.arg;
        let accessId = binding.value;

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
            allowed = permission.component.includes(accessId);
            if (permission.length) {
              el.style.display = "none";
            }
            break;
          case "view":
            if (permission.length) {
              el.disabled = "disabled";
              el.className += " " + "disabled";
              el.style.display = "none";
            }
            break;
        }
      },
    });

    const utils = {
      disabledClass: "v-access-disabled",
      failFunc: function() {
        // store.dispatch("notific/errorMan", { type: "access" });
      },
      passFunc: function() {},
    };

    Vue.myGlobalMethod = function() {};

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

    // 4. add an instance method
    // Vue.prototype.$myMethod = function(methodOptions) {
    //   // some logic ...
    // };
  },
};

export default Access;
