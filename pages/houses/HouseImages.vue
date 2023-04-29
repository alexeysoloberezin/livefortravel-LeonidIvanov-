<template>
  <div class="houseImage">
    <v-col
      v-for="(img) in house.info.img"
      :key="img"
      class=""
    >
      <img
        :src="img"
        class="bg-grey-lighten-2"
      />
    </v-col>
  </div>
</template>

<script>
export default {
  name: "HouseImages",
  props: {
    house: Object
  }
}
</script>

<style  lang="scss">
.houseImage {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  .v-image__image{
    border-radius: 5px;
  }
}
</style>
