<script setup lang="ts">
import type { GatheringPoint } from "@/components/gathering-point/model/gathering-point.model";
import { ref } from "vue";

const gatheringPoints = ref<GatheringPoint[]>();

fetch("http://localhost:3000/gathering-points")
  .then((res) => res.json())
  .then((data) => data as GatheringPoint[])
  .then((data) => {
    gatheringPoints.value = data;
  });
</script>

<template>
  <div v-for="gatherinpoint in gatheringPoints" class="gathering-card">
    <span>id: {{ gatherinpoint.id }}</span>
    <span>category: {{ gatherinpoint.gatheringCategory }}</span>
    <span>starting hour: {{ gatherinpoint.startingHour }}</span>
    <span>ending hour: {{ gatherinpoint.endingHour }}</span>
  </div>
</template>

<style scoped>
.gathering-card {
  display: flex;
  flex-direction: column;
}

span{
  margin-left: auto;
  margin-right: auto;
}
</style>
