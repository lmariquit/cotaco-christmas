<template>
  <router-link class="user-card-small" to="/wishlists/8419989">
    <BaseButton>
      <template v-slot:left>
        <!-- imgSmall Not working... -->
        <img
          class="user-icon"
          alt="user-icon"
          src="../assets/user-icon-placeholder.svg"
        />
      </template>
      <template v-slot:default>
        <span class="user-card-small__name"
          >{{ shortName || firstName }} {{ lastName }}</span
        >
      </template>
    </BaseButton>
  </router-link>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue'

export default {
  name: 'UserCardSmall',
  components: {
    BaseButton
  },
  props: {
    firstName: {
      type: String,
      required: false
    },
    shortName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    }
    // ,
    // imgSmall: {
    //   type: String,
    //   default: '../assets/user-icon-placeholder.svg',
    //   validator: propValue => {
    //     const hasImagesDirectory = propValue.indexOf('/images/') > -1
    //     const isPNG = propValue.endsWith('.png')
    //     const isJPEG = propValue.endsWith('.jpeg') || propValue.endsWith('.jpg')
    //     const isSVG = propValue.endsWith('.svg')
    //     const hasValidExtension = isPNG || isJPEG || isSVG

    //     return hasImagesDirectory && hasValidExtension
    //   }
    // }
  }
}
</script>

<style scoped>
.user-card-small {
  width: 90%;
  display: flex;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #39495c;
  border-radius: 0.5rem;
  cursor: pointer;
}

.user-card-small:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.user-icon {
  width: 50px;
  padding: 0 1rem;
}

.user-card-small__name {
  display: flex;
  align-items: center;
  font-size: 20px;
  text-transform: capitalize;
}
</style>
