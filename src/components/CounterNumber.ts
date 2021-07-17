import { ref, defineComponent, h } from "vue-demi";

export const CounterNumber = defineComponent({
  name: "Awesome",
  setup() {
    const count = ref(640);
    return () => h("div", { class: "counter-number" }, count.value);
  },
});
