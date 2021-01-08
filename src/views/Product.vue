<template>
  <div>name: {{ product.name }}</div>
  <div>Description: {{ product.description }}</div>
  <div>Estimated Cost: {{ product.estCost }}</div>
  <div>purchased: {{ product.purchased }}</div>
</template>

<script>
import EventService from '@/services/EventService.js'

export default {
  name: 'Product',
  props: ['name', 'purchased', 'productId', 'userId'],
  data() {
    return {
      product: []
    }
  },
  created() {
    // fetch data for a single productId
    console.log('looking for', this.userId, this.productId)
    EventService.getProduct(this.userId, this.productId)
      .then(res => {
        this.product = [...res.data][0]
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
