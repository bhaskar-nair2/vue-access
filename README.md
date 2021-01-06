# Vue-Access

## Useage

In your `main.js` file

```js
import Vue from "vue";
import router from "./router";
import store from "./store";

import access from "./access";

Vue.use(access, { store, router });
```

Can aditionally get the default styles that Vue-Access provides for initial setup

```js
import "@/styles/access-styles.css";
```

## User Setup

Every user needs to have a role name (admin, support, etc) which will determine what all entities does the user have access to.

## Permissions Setup

Every role will need have certain permissions. These can be

1. Component based: Unique name per component
2. Group based: Multiple components grouped under the same name.
3. A mix of both

With 3 types of access modfiers:

- `view`: Does not render the component if the access is false
- `component`: Hides the component if access is false
- `action`: Disables the component if the access is false

## Store Setup

`vue-access` will create a store for you called `access`. It will hold the details of the User's permissions from the backend. Ideally, you should populate this as soon as the user logs in.

The structure of this store needs to be like this:

```js
export const state = {
  roleName: "",
  permissions: {
    all: {
      view: [],
      comp: [],
      action: [],
    },
    dashboard: {
      view: [],
      comp: [],
      action: [],
    },
  },
};
```

- `roleName`: Used to store the name of the given role. Can be empty
- `permissions`: Used to store the proprties which describe the access of the given user.
- `all`: Used when one needs to store all the user permissions under a single entity, ideal for smaller applications OR grouped permissions.
- `entity`: The entity name (like `dashboard` in this case) under which various permissions are nested. We can have multiple entities like this. Imagine `settings`, `bookings`, `invoices`, etc.

**Please make sure that the structure of the permissions access-store is as shown above**
