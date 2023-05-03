<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
        <div class="modal-header" id="modalTitle">
          <button type="button" class="btn-close" @click="close" aria-label="Close modal">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M2.3812 0.397739L11.2581 9.03977C11.8029 9.57009 11.8029 10.4299 11.2581 10.9602L2.3812 19.6023C1.83647 20.1326 0.953281 20.1326 0.408549 19.6023C-0.136183 19.0719 -0.136183 18.2121 0.408549 17.6818L8.29914 10L0.40855 2.31819C-0.136182 1.78787 -0.136181 0.928057 0.408551 0.397739C0.953283 -0.13258 1.83647 -0.13258 2.3812 0.397739Z"
                fill="#999999" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M17.6188 0.397739L8.74188 9.03977C8.19715 9.57009 8.19715 10.4299 8.74188 10.9602L17.6188 19.6023C18.1635 20.1326 19.0467 20.1326 19.5914 19.6023C20.1362 19.0719 20.1362 18.2121 19.5914 17.6818L11.7009 10L19.5914 2.31819C20.1362 1.78787 20.1362 0.928057 19.5914 0.397739C19.0467 -0.13258 18.1635 -0.13258 17.6188 0.397739Z"
                fill="#999999" />
            </svg>
          </button>
        </div>
        <div class="modal-body" id="modalDescription">
          <img id="myImgModal" :src="product.imageProduct1" :alt="product.title" style="width:1065px"
            class="product__block-left__img-big product__block-left__img modal-img-big">
          <div class="modal-img">
            <div ref="prev" class="swiper-button-prev modal-prev"></div>
            <div ref="next" class="swiper-button-next modal-next"></div>
            <swiper :modules="modules" :slidesPerView="'auto'" :navigation="{ prevEl: prev, nextEl: next }">
              <swiper-slide class="modal-swiper-slide modal-img1" style="width:253px">
                <img :src="product.imageProduct2" :alt="product.title" style="width:253px"
                  class="product__block-left__img modal-img1">
              </swiper-slide>
              <swiper-slide class="modal-swiper-slide modal-img2" style="width:135px">
                <img :src="product.imageProduct3" :alt="product.title" style="width:135px"
                  class="product__block-left__img modal-img2">
              </swiper-slide>
              <swiper-slide class="modal-swiper-slide modal-img3" style="width:275px">
                <img :src="product.imageProduct4" :alt="product.title" style="width:275px"
                  class="product__block-left__img modal-img3">
              </swiper-slide>
              <swiper-slide class="modal-swiper-slide modal-img4" style="width:281px">
                <img :src="product.imageProduct5" :alt="product.title" style="width:281px"
                  class="product__block-left__img modal-img4">
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';

export default {
  props: ['product'],
  name: 'ModalImg',
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
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style>
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 1s ease
}

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: start;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.3);
}

.modal {
  position: relative;
  top: 143px;
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  background: #FFFFFF;
  border-radius: 10px 10px 10px 10px;
}

.modal-header {
  display: flex;
  justify-content: end;
}

.modal-body {
  padding-top: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal-img {
  padding: 20px 51px;
  gap: 78px;
}

.modal-img-big {
  margin-bottom: 50px;
}

.btn-close {
  position: absolute;
  z-index: 1000;
  border: none;
  padding: 20px;
  cursor: pointer;
  color: #999999;
  background: transparent;
}
</style>