"use strict";
exports.__esModule = true;
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
var vue_1 = require("vue");
var App_vue_1 = require("./App.vue");
var router_1 = require("./router");
var store_1 = require("./store");
var bootstrap_vue_1 = require("bootstrap-vue");
require("bootstrap/dist/css/bootstrap.css");
require("bootstrap-vue/dist/bootstrap-vue.css");
vue_1["default"].config.productionTip = false;
vue_1["default"].use(bootstrap_vue_1["default"]);
/* eslint-disable no-new */
new vue_1["default"]({
    el: '#app',
    router: router_1["default"],
    store: store_1["default"],
    template: '<App/>',
    components: { App: App_vue_1["default"] }
});
