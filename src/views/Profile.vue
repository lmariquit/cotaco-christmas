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
        <WishlistItemSmall
          v-for="wishlistItem in wishlistItems"
          :key="wishlistItem.key"
          :name="wishlistItem.displayName || wishlistItem.name"
          :purchased="wishlistItem.purchased"
        />
      </div>
    </template>
  </BaseProfile>
</template>

<script>
import BaseProfile from '@/components/BaseProfile.vue'
import WishlistItemSmall from '@/components/WishlistItemSmall.vue'

export default {
  name: 'Profile',
  components: {
    BaseProfile,
    WishlistItemSmall
  },
  data() {
    return {
      event: null,
      id: 8419989, //Hardcoded for now
      wishlistItems: [
        {
          id: 0,
          name: 'Mini Smart Plug That Has A long Name',
          displayName: 'Mini Smart Plug',
          additionalDetails: 'white',
          estCost: 18.53,
          url: 'http://www.google.com',
          purchased: false
        },
        {
          id: 1,
          name: 'Essential Oils Gift Set By Pollywhirl Has A long Name',
          additionalDetails: 'blue',
          estCost: 50.99,
          url: 'http://www.google.com',
          purchased: true
        },
        {
          id: 2,
          name: 'Baseball bat',
          additionalDetails: 'blue',
          estCost: 50.99,
          url: 'http://www.google.com',
          purchased: false
        },
        {
          id: 3,
          name: 'Perfum',
          additionalDetails: 'blue',
          estCost: 50.99,
          url: 'http://www.google.com',
          purchased: true
        },
        {
          id: 4,
          name: 'Man i dont knwo but its a lot of text here',
          additionalDetails: 'blue',
          estCost: 50.99,
          url: 'http://www.google.com',
          purchased: true
        }
      ]
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
