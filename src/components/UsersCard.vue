<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ user.username }}</h5>
      <p class="card-text">
        {{ user.email }}
      </p>
      <li>{{ user.name }}</li>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line no-undef
  name: 'UsersCard',
  props: {
    user: Object,
  },
};
</script>

<style></style>
