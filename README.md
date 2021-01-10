# Vue-Access

## Installation

In your `main.js` file

```js
import Vue from "vue";
import router from "./router";
import store from "./store";

import access from "./access";

Vue.use(access, { store, router, entityBased = false });
```

Aditionally, you get the default styles that Vue-Access provides for initial setup

```js
import "@/styles/access-styles.css";
```

## Useage

You can add the `v-access` directive with the associated binding to any component as shown under. Every binding has a unique functionality.

```html
<input type="button" @click="someFunction" v-access:action="'buttonAccess'" />

<div v-access:comp="'imgAccess'">
  <img src="https://picsum.photos/id/237/200/300" />
</div>

<div v-access:auth>
  <img src="https://picsum.photos/id/237/200/300" />
</div>
```

Please notice the extra `''` surrounding each value

> Does not work on `<template>` tags

## User Setup

Every user needs to have a role name (admin, support, etc) which will determine what all entities does the user have access to.

## Store Setup

`vue-access` will create a store for you called `access`. It will hold the details of the User's permissions from the backend. Ideally, you should populate this as soon as the user logs in.

This is the structure the access store follows:

```js
export const state = {
  roleName: "",
  currentEntity: "",
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

By default the store will only have the `all` object in the permission. We have added the `dashboard` object just to explain the concept better.

- `roleName`
  : Used to store the name of the given role. Can be empty
- `currentEntity`
  : Used to define the current entity/page the user is on.
- `permissions`
  : The permissions object this the primary focus here as it defines the access given to the user. The permissions are divided by entities. Think of entities to be pages like _Dashboard_ or _Profile_ etc. Tho, for smaller applications it makes more sense to have a single parent then divide it into entities.
  - `all`
    : Used when one needs to store all the user permissions under a single entity, ideal for smaller applications OR grouped permissions.
  - `entity`
    : The entity name (like `dashboard` in this case) under which various permissions are nested. We can have multiple entities like this. Imagine `settings`, `bookings`, `invoices`, etc.

If you wish to use v-access with multiple entities you will need to set `entityBased = true` when regestring in the `main.js` file.

```js
Vue.use(access, { store, router, entityBased = true });
```

> Please make sure that when you populate the access store it retains the same structure as shown above.

## Permissions Setup

Every permission object will have 3 possible access levels:

- `view`: Does not render the component if the access is false
- `component`: Hides the component if access is false
- `action`: Disables the component if the access is false

The values provided in these access levels can be:

1. Component based: Unique name per component. ex `editInvoiceButton`
2. Group based: Multiple components grouped under the same name. ex `editButtons`
3. A mix of both

## Global Functions

- `$setRole`
- `$setAuth`
- `$setCurrentEntity`
- `$addEntity`
