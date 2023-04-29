<template>
  <div class="tag" style="background: #03C988;">
    <h4 v-if="checkStatus(value) === 'Available'" style="color: #fff">{{ $t('available') }}</h4>
    <h4 v-else style="color: #fff">
      {{ $t('willBeAvailable') }}
      {{ $moment(value, 'MM/DD/YYYY').format('LL') }}
    </h4>
  </div>
</template>

<script>
export default {
  name: "AvailbleTag",
  props: {
    value: String
  },
  mounted() {

  },
  methods: {
    checkStatus(nextPayment) {
      const date = this.$moment(nextPayment, 'MM/DD/YYYY')

      if (date.isBefore(this.$moment())) {
        console.log(`Дата ${nextPayment} уже прошла`)

        return 'Available'
      } else {
        console.log(`Дата ${nextPayment} еще не наступила`)

        return 'Rented'
      }
    }
  }
}
</script>

<style scoped>

</style>
