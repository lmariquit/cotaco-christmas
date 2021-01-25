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
      <div v-if="user.profileMessage" class="msg-bubble">
        {{ user.profileMessage }}
      </div>
      <div v-else class="msg-bubble">Message Bubble Here</div>
    </template>

    <template v-slot:user-title>
      <span class="wishlist-header__owner"
        >{{ user.firstName }}'s Wishlist</span
      >
      <span class="wishlist-header__count"
        >{{ purchasedItemsLength }} / {{ wishlistLength }} Bought</span
      >
    </template>

    <template v-slot:user-wishlist>
      <div class="user-wishlist">
        <WishlistItemSmall
          v-for="wishlistItem in wishlistItems"
          :key="wishlistItem.id"
          :productId="wishlistItem.id"
          :name="wishlistItem.displayName || wishlistItem.name"
          :purchased="wishlistItem.purchased"
          :userId="userId"
        />
      </div>
    </template>
  </BaseProfile>
</template>

<script>
import BaseProfile from '@/components/BaseProfile.vue'
import WishlistItemSmall from '@/components/WishlistItemSmall.vue'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Profile',
  components: {
    BaseProfile,
    WishlistItemSmall
  },
  props: ['userId'],
  created() {
    this.$store.dispatch('fetchUser', this.userId)
    this.$store.dispatch('fetchWishlistItems', this.userId)
  },
  computed: {
    ...mapState(['user', 'users', 'wishlistItems']),
    ...mapGetters(['getItemById', 'wishlistLength', 'purchasedItemsLength'])
  }
}
</script>

<style scoped lang="scss">
.msg-bubble {
  background: $yellow;
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
