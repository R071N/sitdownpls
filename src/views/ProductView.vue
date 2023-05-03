<template>
  <div class="container">
    <nav class="catalog-nav">
      <ul class="catalog-nav__item">
        <li class="catalog-nav__list">
          <router-link :to="{ name: 'home' }">Главная</router-link>
        </li>
        <li class="catalog-nav__list">
          <router-link :to="{ name: 'catalog' }">Каталог</router-link>
        </li>
        <li class="catalog-nav__list">
          <a href="#">Диваны</a>
        </li>
        <li class="catalog-nav__list">
          <a href="#">Прямые диваны</a>
        </li>
        <li class="catalog-nav__list">
          <a href="#">{{ product.model }}</a>
        </li>
      </ul>
    </nav>
    <section class="product">
      <div class="product__block-left">
        <img id="myImg" :src="product.imageProduct1" :alt="product.title" style="width:100%;max-width:624px"
          class="product__block-left__img-big product__block-left__img" @click="showModalImg">
        <div class="product__block-left__mini">
          <img :src="product.imageProduct2" :alt="product.title" style="width:100%;max-width:123px"
            class="product__block-left__img" @click="showModalImg">
          <img :src="product.imageProduct3" :alt="product.title" style="width:100%;max-width:66px"
            class="product__block-left__img" @click="showModalImg">
          <img :src="product.imageProduct4" :alt="product.title" style="width:100%;max-width:134px"
            class="product__block-left__img" @click="showModalImg">
          <img :src="product.imageProduct5" :alt="product.title" style="width:100%;max-width:137px"
            class="product__block-left__img" @click="showModalImg">
        </div>
        <ModalImg :product="product" v-show="modalVisibleImg" @close="closeModalImg" />
        <h2 class="product__block-left__title">Опорный механизм</h2>
        <div class="product__block-left__p">
          <p class="product__block-left__text">
            Опорный механизм напоминает пантограф, к которому добавили дополнительную секцию. У опорного дивана сиденье
            «выпрыгивает» вперёд и вытаскивает вторую часть спального места. Заключительный штрих — опустить спинку.
          </p>
          <p class="product__block-left__text">
            Этот механизм не портит пол и не боится ковров. Требуется чуть больше силы, чтобы разложить диван, но
            подросток
            справится.
          </p>
        </div>
        <img src="../assets/img/product-scheme.png" alt="схема">
      </div>
      <div class="product__block-right">
        <div class="product__buy">
          <div class="product__block-right__rating">
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.2257 5.28193L10.5089 4.59758L8.40032 0.330127C8.34273 0.213287 8.24799 0.118702 8.13095 0.0612089C7.83742 -0.0834504 7.48074 0.037099 7.33398 0.330127L5.22543 4.59758L0.508622 5.28193C0.378579 5.30047 0.259684 5.36167 0.168654 5.45441C0.0586046 5.56733 -0.00203778 5.71924 5.22879e-05 5.87678C0.00214235 6.03431 0.0667938 6.18457 0.179801 6.29454L3.59248 9.61614L2.78622 14.3064C2.76731 14.4156 2.7794 14.5278 2.82113 14.6304C2.86285 14.733 2.93253 14.8218 3.02228 14.8869C3.11202 14.952 3.21823 14.9906 3.32886 14.9985C3.4395 15.0064 3.55013 14.9831 3.64821 14.9314L7.86715 12.717L12.0861 14.9314C12.2013 14.9926 12.335 15.013 12.4632 14.9908C12.7865 14.9352 13.0038 14.6291 12.9481 14.3064L12.1418 9.61614L15.5545 6.29454C15.6474 6.20367 15.7087 6.08497 15.7273 5.95515C15.7774 5.63059 15.5508 5.33015 15.2257 5.28193Z"
                fill="#FF862F" />
            </svg>
            {{ product.rating }}
          </div>
          <h1 class="product__block-right__title">
            Диван тканевый прямой “{{ product.model }}”
          </h1>
          <div class="product__block-right__text">Мини 120 см без ящика Stark синий (Рогожка)</div>
          <div class="product__block-right__price">{{ product.price }} руб</div>
          <button class="btn1 product__block-right__btn" type="button" @click="showModalBuy">Купить в один клик</button>
          <ModalBuy :product="product" v-show="modalVisibleBuy" @close="closeModalBuy"></ModalBuy>
          <div class="product__block-right__desc">+ Добавить в корзину</div>
        </div>
        <div class="product-right">
          <ul class="product-right__list">
            <li class="product-right__item">
              <span class="product-right__specifications">
                Гарантия
              </span>
              <span class="product-right__data">
                18 месяцев
              </span>
            </li>
            <li class="product-right__item">
              <span class="product-right__specifications">
                Артикул
              </span>
              <span class="product-right__data">
                AAA41269004
              </span>
            </li>
            <li class="product-right__item">
              <span class="product-right__specifications">
                Длина
              </span>
              <span class="product-right__data">
                163 см
              </span>
            </li>
            <li class="product-right__item">
              <span class="product-right__specifications">
                Высота
              </span>
              <span class="product-right__data">
                90 см
              </span>
            </li>
            <li class="product-right__item">
              <span class="product-right__specifications">
                Глубина
              </span>
              <span class="product-right__data">
                108 см
              </span>
            </li>
            <li class="product-right__item">
              <span class="product-right__specifications">
                Спальное место
              </span>
              <span class="product-right__data">
                200 см х 125 см
              </span>
            </li>
            <li class="product-right__item">
              <span class="product-right__specifications">
                Высота посадки
              </span>
              <span class="product-right__data">
                45 см
              </span>
            </li>
            <li class="product-right__item">
              <span class="product-right__specifications">
                Механизм
              </span>
              <span class="product-right__data">
                Опорный
              </span>
            </li>
            <li class="product-right__item">
              <span class="product-right__specifications">
                Тип обивки
              </span>
              <span class="product-right__data">
                Рогожка
              </span>
            </li>
            <li class="product-right__item">
              <span class="product-right__specifications">
                Цвет
              </span>
              <span class="product-right__data">
                Синий
              </span>
            </li>
            <li class="product-right__item">
              <span class="product-right__specifications">
                Наполнитель
              </span>
              <span class="product-right__data">
                Независимый пружинный блок
              </span>
            </li>
            <li class="product-right__item">
              <span class="product-right__specifications">
                Материал каркаса
              </span>
              <span class="product-right__data">
                Металл. рама с дерев. латами
              </span>
            </li>
            <li class="product-right__item">
              <span class="product-right__specifications">
                Количество мест
              </span>
              <span class="product-right__data">
                Двухместные
              </span>
            </li>
            <li class="product-right__item">
              <span class="product-right__specifications">
                Категория
              </span>
              <span class="product-right__data">
                Прямые тканевые диваны
              </span>
            </li>
            <li class="product-right__item">
              <span class="product-right__specifications">
                Возврат
              </span>
              <span class="product-right__data">
                Условия
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="similar">
      <h2 class="similar__title">Похожие товары</h2>
      <div ref="prev" class="swiper-button-prev similar-prev"></div>
      <div ref="next" class="swiper-button-next similar-next"></div>
      <swiper class="similar__swiper" :modules="modules" :slidesPerView="'auto'" :spaceBetween="32"
        :navigation="{ prevEl: prev, nextEl: next }">
        <swiper-slide class="similar__card" v-for="item in catalog" :key="item.id">
          <div class="hight-rating__block__card__rate">
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.2257 5.28193L10.5089 4.59758L8.40032 0.330127C8.34273 0.213287 8.24799 0.118702 8.13095 0.0612089C7.83742 -0.0834504 7.48074 0.037099 7.33398 0.330127L5.22543 4.59758L0.508622 5.28193C0.378579 5.30047 0.259684 5.36167 0.168654 5.45441C0.0586046 5.56733 -0.00203778 5.71924 5.22879e-05 5.87678C0.00214235 6.03431 0.0667938 6.18457 0.179801 6.29454L3.59248 9.61614L2.78622 14.3064C2.76731 14.4156 2.7794 14.5278 2.82113 14.6304C2.86285 14.733 2.93253 14.8218 3.02228 14.8869C3.11202 14.952 3.21823 14.9906 3.32886 14.9985C3.4395 15.0064 3.55013 14.9831 3.64821 14.9314L7.86715 12.717L12.0861 14.9314C12.2013 14.9926 12.335 15.013 12.4632 14.9908C12.7865 14.9352 13.0038 14.6291 12.9481 14.3064L12.1418 9.61614L15.5545 6.29454C15.6474 6.20367 15.7087 6.08497 15.7273 5.95515C15.7774 5.63059 15.5508 5.33015 15.2257 5.28193Z"
                fill="#FF862F" />
            </svg>
            <span>{{ item.rating }}</span>
          </div>
          <img :src="item.image" :alt="item.title" class="hight-rating__block__card__img">
          <h3 class="hight-rating__block__card__subtitle">{{ item.title }}</h3>
          <div class="hight-rating__block__card__price">{{ item.price }} руб</div>
          <button class="btn2 hight-rating__block__card__btn">Купить</button>
        </swiper-slide>
      </swiper>
    </section>
  </div>
</template>

<script>
import catalog from '@/data/catalog'
import ModalImg from '@/components/ModalImg.vue'
import ModalBuy from '@/components/ModalBuy.vue'

import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';

export default {
  name: "ProductView",
  data() {
    return {
      catalog,
      modalVisibleImg: false,
      modalVisibleBuy: false,
    };
  },
  methods: {
    showModalImg() {
      this.modalVisibleImg = true;
    },
    closeModalImg() {
      this.modalVisibleImg = false;
    },
    showModalBuy() {
      this.modalVisibleBuy = true;
    },
    closeModalBuy() {
      this.modalVisibleBuy = false;
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    ModalImg,
    ModalBuy,
  },
  computed: {
    product() {
      return catalog.find((product) => product.id === +this.$route.params.id);
    },
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
@import "../assets/css/media-product.scss";
</style>