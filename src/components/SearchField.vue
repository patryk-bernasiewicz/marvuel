<template>
  <input
    type="search"
    class="border-solid border-2 border-gray-200 px-2 py-1 w-full"
    placeholder="Heroes name starting with..."
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  name: 'search-field'
};
</script>
