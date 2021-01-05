<template>
  <h1>Wishilists</h1>
  <div class="sort-menu">
    <span class="sort-menu__alphabetical">Alphabetical</span>
    <span class="sort-menu__family">Family</span>
    <span class="sort-menu__age">Age</span>
  </div>
  <div class="users">
    <UserCardSmall
      v-for="user in users"
      :key="user.id"
      :firstName="user.firstName"
      :shortName="user.shortName"
      :lastName="user.lastName"
    />
  </div>
</template>

<script>
// @ is an alias to /src
// import UserCard from '@/components/UserCard.vue'
import UserCardSmall from '@/components/UserCardSmall.vue'
import axios from 'axios'

export default {
  name: 'Wishlists',
  components: {
    UserCardSmall
  },
  data() {
    return {
      users: null
    }
  },
  created() {
    axios
      .get('/api/users')
      .then(response => {
        this.users = response.data
        console.log('events:', response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
.users {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
}

.sort-menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0.5rem 1rem;
  margin: 1rem 1.5rem;
  border: 1px solid #39495c;
  border-radius: 1.5rem;
  font-size: 14px;
  text-align: center;
}
</style>
