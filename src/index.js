import selectComponent from "./SelectComponent.vue";

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("select-component", selectComponent);
}

const plugin = {
  install
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

selectComponent.install = install;

export default selectComponent;
