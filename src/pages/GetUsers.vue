<template>
  <div class="container mt-5">
    <div class="row g-3">
      <div v-if="loading" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else class="col-md-3" v-for="user in users" :key="user.id">
        <UsersCard :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';
import UsersCard from '@/components/UsersCard.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'getUser',
  components: { UsersCard },

  setup() {
    const users = ref([]);
    const loading = ref(true);

    function getUsers() {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
          // handle success
          users.value = response.data;
          loading.value = false;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    }
    getUsers();
    return { users, loading };
  },
};
</script>

<style></style>
