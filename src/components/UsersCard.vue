<template>
  <div class="container mt-5">
    <div class="row g-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">
            <router-link :to="{ name: 'userId', params: { id: user.id } }">{{
              user.username
            }}</router-link>
          </h5>
          <p class="card-text">
            {{ user.email }}
          </p>
          <li>{{ user.name }}</li>
          <router-link :to="{ name: 'home' }" class="btn btn-primary"
            >Back to Home</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line no-undef
  name: 'usersCard',
  props: {
    user: Object,
  },
};
</script>

<style></style>
