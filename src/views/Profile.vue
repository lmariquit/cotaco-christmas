<template>
  <BaseProfile>
    <template v-slot:profile-img>
      <img
        class="user-icon"
        alt="user-icon"
        src="../assets/user-icon-placeholder.svg"
      />
    </template>

    <template v-slot:msg-bubble>
      <div class="msg-bubble">Message Bubble Here</div>
    </template>

    <template v-slot:user-title>
      <span class="wishlist-header__owner">Katies Wishlist</span>
      <span class="wishlist-header__count">1 / 4 Bought</span>
    </template>

    <template v-slot:user-wishlist>
      <div class="user-wishlist">
        Wishlist Here
      </div>
    </template>
  </BaseProfile>
</template>
<script>
import BaseProfile from '@/components/BaseProfile.vue'

export default {
  name: 'Profile',
  components: {
    BaseProfile
  },
  data() {
    return {
      event: null,
      id: 8419989 //Hardcoded for now
    }
  },
  created() {
    // fetch data for single id
  }
}
</script>

<style scoped>
.msg-bubble {
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #39495c;
  border-radius: 0.75rem;
  font-size: 14px;
}

.wishlist-header__owner {
  font-size: 28px;
}

.wishlist-header__count {
  float: right;
  font-size: 14px;
}
</style>
