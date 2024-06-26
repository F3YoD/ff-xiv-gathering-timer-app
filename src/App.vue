<script setup lang="ts">
import DomToImage from "dom-to-image";
import { saveAs } from "file-saver";
import Timer from "@/components/timer/timer.vue";
import GatheringPoint from "@/components/gathering-point/gatherin-point.vue";

function onClick() {
  const elem = document.getElementById("app");
  console.log(elem);
  if (elem != null) {
    DomToImage.toBlob(elem, { bgcolor: "white" }).then((img) =>
      saveAs(img, "test.png"),
    );
  }
}
</script>

<template>
  <header></header>

  <main id="toPrint">
    <gathering-point></gathering-point>
    <timer :timer="60"></timer>
    <button @click="onClick">Download</button>
  </main>
</template>

<style scoped>
#toPrint {
  display: flex;
  flex-direction: column;
}
</style>
