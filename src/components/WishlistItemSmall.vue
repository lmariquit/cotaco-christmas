<template>
  <div>
    <router-link
      class="user-wishlist__item"
      :class="[isPurchased ? 'is-purchased' : '']"
      :to="{
        name: 'Product',
        params: { productId }
      }"
    >
      <BaseButton>
        <template v-slot:left>
          <span class="user-wishlist__item-name">
            {{ name }}
          </span>
        </template>
        <template v-slot:right>
          <span class="user-wishlist__item-text">
            Click for Details
          </span>
        </template>
        <template v-slot:default>
          <div class="user-wishlist__item-purchased-text">PURCHASED</div>
        </template>
      </BaseButton>
    </router-link>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue'

export default {
  name: 'WishlistItemSmall',
  components: {
    BaseButton
  },
  props: {
    name: {
      type: String,
      required: true
    },
    purchased: {
      type: Boolean,
      required: true
    },
    productId: {
      type: Number,
      require: true
    },
    userId: {
      type: String,
      require: true
    }
  },
  data() {
    return {
      isPurchased: this.purchased
    }
  }
}
</script>

<style scoped>
.user-wishlist__item {
  height: 5rem;
  display: grid;
  position: relative;
  grid-template-columns: 3fr 1fr;
  padding-left: 1rem;
  margin: 1rem 0;
  border: 1px solid #39495c;
  /* border-radius: 0.5rem; */
  text-decoration: none;
  color: #2c3e50;
}

.user-wishlist__item-name {
  display: block;
  margin: auto 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 20px;
}

.user-wishlist__item-text {
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 14px;
}

.is-purchased {
  color: grey;
  background: lightgrey;
}

.is-purchased .user-wishlist__item-name {
  text-decoration: line-through;
}

.user-wishlist__item-purchased-text {
  display: none;
}

.is-purchased .user-wishlist__item-purchased-text {
  width: 100%;
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  font-size: 32px;
  font-weight: 800;
  color: white;
}
</style>
