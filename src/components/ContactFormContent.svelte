<script lang="ts"></script>

<div class="">
  <form
    class="w-full"
    name="contactForm"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="form-name" value="contactForm" />
    <div class="w-full items-center justify-center">
      <!-- <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left"
        >E-Mail</label
      > -->
      <input
        name="contactEmail"
        type="email"
        placeholder="mail@company.com"
        maxlength="40"
        required
        class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
      />
      <div class="w-full mt-6">
        <textarea
          type="text"
          name="contactText"
          placeholder="Message"
          maxlength="240"
          rows="5"
          cols="60"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded pt-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
        <p class="text-left mb-6" />
      </div>
      <p class="text-left mb-6" />
    </div>
    <button type="submit" value="Send Message" class="button glass-effect text-gray-100">
      Send
    </button>
  </form>
</div>

<style>
  .glass-effect {
    background: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.3)
    );
  }
  .button {
    height: 4rem;
    width: 12rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 600;
    border-radius: 0.375rem;
  }
</style>
