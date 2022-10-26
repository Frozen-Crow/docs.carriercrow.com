<script setup>
import { ref } from "vue";
const toggle = ref(true);
</script>

# Testing v-if

<button @click.prevent="toggle=!toggle">Toggle Me</button>

<div v-if="toggle">
A
</div>
<div v-else>
B
</div>
