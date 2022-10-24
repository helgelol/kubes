import Home from './home.svelte';
import Resume from './resume.svelte';
import NotFound from './notfound.svelte';

// Export the route definition object
export default {
  // Exact path
  '/': Home,

  // Wildcard parameter
  // Included twice to match both `/wild` (and nothing after) and `/wild/*` (with anything after)
  '/resume': Resume,

  // Catch-all, must be last
  '*': NotFound,
};
