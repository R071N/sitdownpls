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
        <div class="modal-body modal-body-buy" id="modalDescription">
          <h2 class="modal-buy__title">Купить в один клик</h2>
          <form action="#" class="feedback__left__form modal-form" @submit="showExcellent">
            <div class="modal-form__text">Чтобы оформить заказ — заполните формы ниже и наш менеджер свяжется с вами в
              течении часа.</div>
            <label for="name">
              <input id="name" type="text" placeholder="Как вас зовут?" class="feedback__left__form__input" required>
            </label>
            <label for="phone">
              <input id="phone" type="tel" placeholder="Ваш телефон" class="feedback__left__form__input" minlength="11"
                maxlength="11" pattern="[0-9]*" required>
            </label>
            <div class="feedback__left__form__bottom">
              <button class="btn1 feedback__left__form__btn modal-form__btn">Отправить</button>
              <label for="">
                <input type="checkbox" id="checkbox" required class="checkbox">
                <label for="checkbox" class="checkbox__label">
                  Принимаю
                  <a href="#" class="feedback__left__form__bottom__link">пользовательское соглашение</a>
                </label>
              </label>
            </div>
          </form>
          <div class="buy-excellent" v-show="excellent">
            <svg width="172" height="117" viewBox="0 0 172 117" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M27.3271 104.845C48.9686 104.845 53.0467 85.9472 53.0467 70.8167C55.6171 70.8167 75.9308 70.8167 85.1963 70.8167C135.595 70.8167 135.608 0 86.8037 0C73.5292 0 64.979 7.99229 62.69 10.7765C35.4593 10.7765 32.1495 24.907 32.1495 52.3443C32.1495 57.6375 32.1495 74.844 32.1495 77.4944C32.1495 83.9457 29.539 88.1311 22.5031 88.1311C16.4959 88.1311 13.6507 82.8485 11.2507 75.4352C10.0001 76.1023 1.21848 80.8196 0 81.5932C2.65717 88.9988 5.5024 104.845 27.3271 104.845ZM57.9238 41.5663C66.1686 41.5663 66.8694 53.8823 57.3403 53.8823C49.3077 53.8823 49.5167 41.5663 57.9238 41.5663ZM86.8054 78.4731C79.8369 78.4731 59.4766 76.9747 59.4766 76.9747V114.944L78.7664 115.217L83.5888 87.7511L144.673 86.6113L146.282 116.725L168.787 117C168.787 117 172 58.0175 172 46.1848C172 24.2368 162.112 11.8144 139.85 10.7765C134.273 10.5166 126.975 9.48315 122.168 9.23696C143.118 34.5543 126.449 78.4731 86.8054 78.4731ZM125.385 93.8681L126.991 116.178L139.85 116.453L138.243 93.8681H125.385ZM85.1963 115.494L98.0561 115.767L101.269 93.8681H90.0171L85.1963 115.494Z"
                fill="#FF862F" />
            </svg>
            <div>Спасибо, мы вам перезвоним!</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
  
<script>
export default {
  name: 'ModalBuy',
  data() {
    return {
      excellent: false,
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },
    showExcellent() {
      this.excellent = true;
    },
  },
};
</script>
  
<style lang="scss">
.modal-body-buy {
  padding: 30px;
  align-items: start;
}

.modal-buy__title {
  margin: 0;
  margin-bottom: 8px;
  font-weight: 400;
  font-size: 32px;
  line-height: 100%;
  color: #333333;
}

.modal-form {
  width: 564px;

  &__text {
    width: 374px;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #333333;
  }

  &__btn {
    margin-bottom: 12px;
  }
}

.buy-excellent {
  position: absolute;
  z-index: 100;
  display: flex;
  width: 92%;
  height: 90%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;


  & svg {
    margin-bottom: 32px;
  }

  & div {
    font-weight: 400;
    font-size: 32px;
    line-height: 100%;
    color: #333333;
  }
}
</style>