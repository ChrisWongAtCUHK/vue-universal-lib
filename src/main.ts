import { createApp } from "vue-demi";
import App from "./App.vue";

import { createVueCounterPlugin } from "./";

const VueCounterPlugin = createVueCounterPlugin();

createApp(App).use(VueCounterPlugin).mount("#app");
