// Used in actual scenario
export const accessArr = [
  {
    entity: "overview",
    view: ["analytics", "scheduler", "tracking"],
    component: [],
    action: [],
  },
  {
    entity: "admin",
    view: ["componentany", "types", "roles", "users", "docs"],
    component: [
      "coyManage",
      "cityList",
      "taxManage",
      "vehicleTypes",
      "vehicleCategory",
      "vendorTypes",
    ],
    action: [
      "addTax",
      "addVehType",
      "addVehCat",
      "addVenType",
      "addRole",
      "changeRole",
    ],
  },
  {
    entity: "booking",
    view: ["created", "executed", "onRoad", "closed", "invoiced", "cancelled"],
    component: [],
    action: [
      "allot",
      "edit",
      "cancel",
      "activate",
      "shift",
      "close",
      "invoice",
      "mailInvoice",
      "downloadInvoice",
      "restore",
    ],
  },
  {
    entity: "client",
    view: ["overview", "rates", "rentals", "invoices"],
    component: ["data", "ledger", "invoice", "pendingInvoice", "paidInvoice"],
    action: [
      "createInvoice",
      "generateReport",
      "editData",
      "createRate",
      "editRate",
      "copyRate",
      "createHotelRental",
      "createBasicRental",
      "createTransaction",
      "mailInvoice",
      "downloadInvoice",
    ],
  },
  {
    entity: "vendor",
    view: ["overview", "fleet", "receipts"],
    component: ["data", "ledger"],
    action: [
      "createReceipt",
      "generateReport",
      "editData",
      "editVehicle",
      "toggleVehicleStatus",
      "updateRenewals",
      "createTransaction",
      "mailReceipts",
    ],
  },
  {
    entity: "accounting",
    view: ["overview", "transactions"],
    component: [],
    action: [],
  },
  {
    entity: "fleet",
    view: ["data", "fleet", "receipts"],
    component: [],
    action: [],
  },
  {
    entity: "global",
    view: [],
    component: [],
    action: [
      "newBooking",
      "newVendor",
      "newTransaction",
      "newClient",
      "newVehicle",
    ],
  },
];

// Tab level access means if they have any access at all for that componentonent
// component level access measn if they can see the data
// action level access is if they can make changes
