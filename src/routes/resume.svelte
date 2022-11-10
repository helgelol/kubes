<script lang="ts">
  import Router from 'svelte-spa-router';

  import { fade } from 'svelte/transition';
</script>

<main class="bg-gray-600" in:fade={{ delay: 500 }}>
  <div>
    <p>Helge Falch</p>
    <p>Software Developer</p>
  </div>
  <div class="grid-rows-3 grid-flow-row flex justify-center">
    <div class="bg-red-400 p-4">asd</div>
    <div class="bg-red-500 p-4">zxc</div>
    <div class="bg-red-600 p-4">123</div>
  </div>
</main>

<style>
</style>
