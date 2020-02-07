<template>
  <svg viewBox="-79 0 512 512" class="hammer mr-6">
    <use xlink:href="../assets/img/thor.svg#hammer" />
  </svg>
</template>

<script>
export default {
  name: 'loader'
};
</script>

<style scoped>
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.hammer {
  animation: spin 0.85s cubic-bezier(0.2, 0.37, 0.63, 0.63) infinite forwards;
  transform-origin: center;
  font-size: 0;

  width: 50px;
  height: 50px;
}
</style>
