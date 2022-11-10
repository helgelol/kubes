<script lang="ts">
  import FrontPage from '../components/FrontPage.svelte';

  import { fade } from 'svelte/transition';
</script>

<div in:fade={{ delay: 500 }}>
  <FrontPage />
</div>
