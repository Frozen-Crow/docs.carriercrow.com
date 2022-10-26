<script setup>
import { ref } from "vue";
const toggle = ref(true);
</script>

# Testing v-if

<button @click.prevent="toggle=!toggle">Toggle Me</button>

<div v-if="toggle">

```-vue
A Code block
```

</div>
<div v-else>

::: warning
A Warning
:::

</div>
