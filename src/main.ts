import { createApp } from "vue";
import App from "./App.vue";

import { createVueCounterPlugin } from "./";

const VueCounterPlugin = createVueCounterPlugin();

createApp(App).use(VueCounterPlugin).mount("#app");
