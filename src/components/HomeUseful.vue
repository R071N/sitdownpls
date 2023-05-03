<template>
  <section class="useful">
    <h2 class="useful__title">Полезное</h2>
    <div ref="prev" class="swiper-button-prev"></div>
    <div ref="next" class="swiper-button-next"></div>
    <swiper :slidesPerView="'auto'" :spaceBetween="32" :navigation="{
      prevEl: prev,
      nextEl: next,
    }" :modules="modules" class="useful__swiper">
      <swiper-slide class="useful__slide" v-for="item in useful" :key="item.id">
        <img :src="item.image" :alt="item.id" class="useful__slide__img">
        <div class="useful__slide__block">
          <p class="useful__slide__block__text">{{ item.text }}</p>
          <button class="btn2 useful__slide__block__btn">Читать</button>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>
  
<script>
import useful from '@/data/useful'

import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';

export default {
  name: 'HomeUseful',
  data() {
    return {
      useful,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const prev = ref(null);
    const next = ref(null);
    return {
      modules: [Navigation],
      prev,
      next,
    };
  },
}
</script>

<style lang="scss">
body .useful__slide {
  width: 624px;
}
</style>