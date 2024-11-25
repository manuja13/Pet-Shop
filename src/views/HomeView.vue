<template>
    <HeroCom/>
    <CardsCom/>
    <ShopPromote/>
    <SubsCription/>
</template>

<script>
import CardsCom from '../components/CardsCom.vue';
import HeroCom from '../components/HeroCom.vue';
import ShopPromote from '../components/ShopPromote.vue';
import SubsCription from '../components/SubsCription.vue';

export default {
  name: 'HomeView',
  components: {
    CardsCom,
    HeroCom,
    ShopPromote,
    SubsCription
  }
}

</script>
