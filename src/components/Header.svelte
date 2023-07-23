<script lang="ts">
  //   import Logo from './Logo.svelte';
  //   import Person from './Person.svelte';
  //   import Links from './Links.svelte';
  //   import ContactForm from './ContactForm.svelte';

  import { fade } from 'svelte/transition';

  function handleAnchorClick(event) {
    event.preventDefault();
    const link = event.currentTarget;
    const anchorId = new URL(link.href).hash.replace('#', '');
    const anchor = document.getElementById(anchorId);
    window.scrollTo({
      top: anchor.offsetTop,
      behavior: 'smooth',
    });
  }
</script>

<header class="flex mr-auto justify-center pt-4" in:fade={{ delay: 500 }}>
  <a href="#home" class="mx-4 text-xl" on:click={handleAnchorClick}>Home</a>
  <a href="#about" class="mx-4 text-xl" on:click={handleAnchorClick}>About</a>
  <a href="#work" class="mx-4 text-xl" on:click={handleAnchorClick}>Work</a>
</header>
