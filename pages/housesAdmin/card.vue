<template>
  <div class="cardHouse">
    <img :src="img" alt="">
    <h4 class="text--black">Jack House</h4>
  </div>
</template>

<script>
export default {
  name: "cardHouse",
  props: {
    img: String,

  }
}
</script>

<style scoped lang="scss">
.cardHouse{
  position: relative;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  cursor: pointer;
  img{
    max-width: 100%;
    height: 100%;
    border-radius: 8px;
    width: 100%;
    object-fit: cover;
    display: block;
  }
  h4{
    position: absolute;
    top: 9px;
    left: 6px;
    z-index: 2;
    background: #fff;
    border-radius: 50px;
    color: #313131;
    font-weight: 400;
    font-size: 14px;
    padding: 3px 12px;
  }
}
</style>
