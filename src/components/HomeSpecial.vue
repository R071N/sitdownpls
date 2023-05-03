<template>
  <section class="special">
    <h2 class="special__title">Специальные предложения</h2>
    <div ref="prev" class="swiper-button-prev"></div>
    <div ref="next" class="swiper-button-next"></div>
    <swiper class="special__swiper" :modules="modules" :slidesPerView="'auto'" :spaceBetween="32"
      :navigation="{ prevEl: prev, nextEl: next }">
      <swiper-slide class="special__slide special__slide__mini">
        <div class="special__slide__sale">
          <svg width="92" height="34" viewBox="0 0 92 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H82.1075L92 16.2273L82.1075 34H0V0Z" fill="#FF862F" />
          </svg>
          <span class="special__slide__sale__desc">- 9 000</span>
        </div>
        <img class="special__slide__img" src="../assets/img/special1.png" alt="Спец предложение 1">
        <div class="special__slide__bottom">
          <h3 class="special__slide__subtitle">Кресло велюровое “X-24”</h3>
          <div class="special__slide__price">
            <span class="special__slide__price__new">15 990 руб</span>
            <span class="special__slide__price__old">24 990 руб</span>
          </div>
          <button class="btn2">Купить</button>
        </div>
      </swiper-slide>
      <swiper-slide class="special__slide special__slide__big">
        <div class="special__slide__sale">
          <svg width="92" height="34" viewBox="0 0 92 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H82.1075L92 16.2273L82.1075 34H0V0Z" fill="#FF862F" />
          </svg>
          <span class="special__slide__sale__desc">- 10 000</span>
        </div>
        <img class="special__slide__img" src="../assets/img/special2.png" alt="Спец предложение 2">
        <div class="special__slide__bottom">
          <h3 class="special__slide__subtitle">Диван тканевый “Z-44”</h3>
          <div class="special__slide__price">
            <span class="special__slide__price__new">22 990 руб</span>
            <span class="special__slide__price__old">32 990 руб</span>
          </div>
          <button class="btn2">Купить</button>
        </div>
        <img class="special__slide__img2" src="../assets/img/special2.5.png" alt="Конструкция">
      </swiper-slide>
      <swiper-slide class="special__slide">
        <div class="special__slide__sale">
          <svg width="92" height="34" viewBox="0 0 92 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H82.1075L92 16.2273L82.1075 34H0V0Z" fill="#FF862F" />
          </svg>
          <span class="special__slide__sale__desc">- 600</span>
        </div>
        <img class="special__slide__img" src="../assets/img/special3.png" alt="Спец предложение 3">
        <div class="special__slide__bottom">
          <h3 class="special__slide__subtitle">Будильник<br />“Quartz-23”</h3>
          <div class="special__slide__price">
            <span class="special__slide__price__new">1 290 руб</span>
            <span class="special__slide__price__old">1 890 руб</span>
          </div>
          <button class="btn2">Купить</button>
        </div>
      </swiper-slide>
      <swiper-slide class="special__slide">
        <div class="special__slide__sale">
          <svg width="92" height="34" viewBox="0 0 92 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H82.1075L92 16.2273L82.1075 34H0V0Z" fill="#FF862F" />
          </svg>
          <span class="special__slide__sale__desc">- 300</span>
        </div>
        <img class="special__slide__img" src="../assets/img/special4.png" alt="Спец предложение 4">
        <div class="special__slide__bottom">
          <h3 class="special__slide__subtitle">Мини-скульптура “Oh my deer”</h3>
          <div class="special__slide__price">
            <span class="special__slide__price__new">690 руб</span>
            <span class="special__slide__price__old">990 руб</span>
          </div>
          <button class="btn2">Купить</button>
        </div>
      </swiper-slide>
      <swiper-slide class="special__slide special__slide__big">
        <div class="special__slide__sale">
          <svg width="92" height="34" viewBox="0 0 92 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H82.1075L92 16.2273L82.1075 34H0V0Z" fill="#FF862F" />
          </svg>
          <span class="special__slide__sale__desc">- 10 000</span>
        </div>
        <img class="special__slide__img" src="../assets/img/special5.png" alt="Спец предложение 5">
        <div class="special__slide__bottom">
          <h3 class="special__slide__subtitle">Диван вел-флок “Z-85”</h3>
          <div class="special__slide__price">
            <span class="special__slide__price__new">22 990 руб</span>
            <span class="special__slide__price__old">23 990 руб</span>
          </div>
          <button class="btn2">Купить</button>
        </div>
        <img class="special__slide__img2" src="../assets/img/special5.5.png" alt="Конструкция">
      </swiper-slide>
      <swiper-slide class="special__slide">
        <div class="special__slide__sale">
          <svg width="92" height="34" viewBox="0 0 92 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H82.1075L92 16.2273L82.1075 34H0V0Z" fill="#FF862F" />
          </svg>
          <span class="special__slide__sale__desc">- 700</span>
        </div>
        <img class="special__slide__img" src="../assets/img/special6.png" alt="Спец предложение 6">
        <div class="special__slide__bottom">
          <h3 class="special__slide__subtitle">Термометр + гидрометр “H-18”</h3>
          <div class="special__slide__price">
            <span class="special__slide__price__new">1 390 руб</span>
            <span class="special__slide__price__old">2 090 руб</span>
          </div>
          <button class="btn2">Купить</button>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';

export default {
  name: 'HomeSpecial',
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
body {
  .special__slide {
    position: relative;
    display: flex;
    justify-content: end;
    flex-direction: column;
    padding: 30px;
    width: 236px;
    height: initial;
    background: #F6F6F6;
    border-radius: 10px;

    &__big {
      width: 564px;
    }
  }
}
</style>
