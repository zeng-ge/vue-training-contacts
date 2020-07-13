// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.Cookies.defaults({
  // whitelist: ['session_id']
  whitelist: () => true, // 在测试中不清除任何cookie
});

//防止cypress消除localstorage
const clear = Cypress.LocalStorage.clear;
Cypress.LocalStorage.clear = function(keys, ls, rs) {
  if (keys.length > 0) {
    return clear.apply(this, arguments);
  }
};
