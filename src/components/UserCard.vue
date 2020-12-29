<template>
  <div class="user-card">
    <img
      class="user-icon"
      alt="user-icon"
      src="../assets/user-icon-placeholder.svg"
    />
    <span>{{ user.firstName }} {{ user.lastName }}</span>
    <h4>of the {{ user.family }} family</h4>
    <span>preferred name: {{ user.shortName }} {{ user.lastName }}</span>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    user: Object
  }
}
</script>

<style scoped>
.user-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.user-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.user-icon {
  width: 100px;
}
</style>
