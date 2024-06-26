<script setup lang="ts">
import { onMounted, ref } from "vue";

const props = defineProps({ timer: Number });

const time = ref(props?.timer || 0);

function countDownTimer() {
  if (time.value > 0) {
    setTimeout(() => {
      time.value--;
      countDownTimer();
    }, 1000);
  }
}

onMounted(() => {
  countDownTimer();
});
</script>

<template>
  <span>
    {{ time }}
  </span>
</template>

<style scoped>
span{
  margin-left: auto;
  margin-right: auto;
}
</style>
