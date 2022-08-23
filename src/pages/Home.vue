<template>
  <div>
    <form @submit.prevent="handleSubmit" class="row g-3 mt-5 needs-validation">
      <!-- novalidate -->
      <div class="col-md-4">
        <label for="validationCustom01" class="form-label">First name</label>
        <input
          type="text"
          class="form-control"
          id="validationCustom01"
          value="Haleh"
          required
        />
        <div class="valid-feedback">Looks good!</div>
      </div>
      <div class="col-md-4">
        <label for="validationCustom02" class="form-label">Last name</label>
        <input
          type="text"
          class="form-control"
          id="validationCustom02"
          value="Ghavami"
          required
        />
        <div class="valid-feedback">Looks good!</div>

        <button class="btn" type="submit">Submit form</button>
      </div>
    </form>
    <router-link :to="{ name: 'getUser' }">List of Get Users</router-link>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'home',
  data() {
    return {
      firstname: '',
      lastname: '',
    };
  },
  methods: {
    handleSubmit() {
      console.log('submited');
    },
  },
};
</script>

<style scoped>
.btn {
  background: rgb(7, 24, 7);
  border: 0;
  padding: 10px 20px;
  color: white;
  border-radius: 20px;
}
</style>
