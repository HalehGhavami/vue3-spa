<template>
  <div v-if="loading" class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div v-else class="col-md-3">
    <UsersCard :user="user" />
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';
import UsersCard from '@/components/UsersCard.vue';
import { useRoute } from 'vue-router';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'userId',
  components: { UsersCard },

  setup() {
    const user = ref({});
    const loading = ref(true);
    const route = useRoute();

    function getUser() {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
        .then(function (response) {
          // handle success
          user.value = response.data;
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
    getUser();
    return { user, loading, route };
  },
};
</script>

<style></style>
