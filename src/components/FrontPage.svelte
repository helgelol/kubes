<script lang="ts">
  import Logo from './Logo.svelte';
  import Person from './Person.svelte';
  import Links from './Links.svelte';
  import ContactForm from './ContactForm.svelte';
  import { fade } from 'svelte/transition';
</script>

<div class="frontpage" in:fade={{ delay: 500 }}>
  <Logo />
  <Person />
  <Links />
  <ContactForm />
  <a href="#/resume">Resume</a>
</div>

<style>
  .frontpage {
    overflow: hidden;
    width: 100%;
    height: 100vh;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
  }
</style>
