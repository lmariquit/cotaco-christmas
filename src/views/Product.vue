<template>
  <div class="product">
    <div class="product__name">{{ item.name }}</div>
    <a class="product__url-btn btn--square" :href="item.url">
      Buy Here
    </a>
    <div class="product__cost">
      <div class="product__cost-header">Est. Cost: $</div>
      <div class="product__cost-amount">{{ item.estCost }}</div>
    </div>
    <div class="product__additional-details-header">Additional Details</div>
    <div class="product__additional-details">{{ item.description }}</div>
    <div class="product__bought-btn btn--square" @click="markBought">
      Mark as Bought
    </div>
    <div class="product__purchased-text" v-if="item.purchased">
      BOUGHT
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Product',
  props: ['productId'],
  created() {
    this.$store.dispatch('fetchItem', this.productId)
  },
  computed: mapState(['item']),
  methods: {
    markBought: () => {
      console.log('YOU BOUGHT THIS')
    }
  }
}
</script>

<style scoped>
.product {
  position: relative;
}

.product__name {
  font-size: 28px;
}

.product__url-btn {
  float: left;
  max-width: 50%;
  margin: 1rem 0;
  font-size: 20px;
}

.product__cost {
  float: right;
  display: flex;
  flex-direction: row;
  margin: 1rem 1.5rem 1rem 0;
}

.product__cost-header {
  font-size: 18px;
}

.product__cost-amount {
  justify-content: center;
  font-size: 28px;
}

.product__additional-details-header {
  clear: both;
  font-size: 18px;
}

.product__additional-details {
  padding: 0.5rem;
  font-size: 18px;
}

.product__bought-btn {
  margin: 1rem 0;
  font-size: 18px;
}

.product__purchased-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  justify-content: center;
  align-items: center;
  font-size: 72px;
}
</style>
