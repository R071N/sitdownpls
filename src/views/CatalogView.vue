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
      </ul>
    </nav>
    <div class="catalog-content">
      <aside class="filter">
        <h2 class="filter__title">Фильтровать по:</h2>
        <form class="filter__form form" action="#" method="get">
          <fieldset class="form__block">
            <legend class="form__legend">Категория</legend>
            <ul class="check-list">
              <li class="check-list__item" v-for="categori in categories" :key="categori.id">
                <label class="check-list__label">
                  <input class="check-list__check sr-only" type="checkbox" name="volume" value="8">
                  <span class="check-list__desc">{{ categori.categori }}</span>
                </label>
              </li>
            </ul>
          </fieldset>
          <fieldset class="form__block">
            <legend class="form__legend">Цена</legend>
            <div class="form__block-price">
              <label for="#" class="form__label form__label--price">
                <span class="form__value">от</span>
                <input type="text" name="min-price" class="form__input" maxlength="6" pattern="[0-9]*" placeholder="2000">
              </label>
              <label for="#" class="form__label form__label--price">
                <span class="form__value">до</span>
                <input type="text" name="max-price" class="form__input" maxlength="6" pattern="[0-9]*"
                  placeholder="150 000">
              </label>
            </div>
            <svg width="296" height="13" viewBox="0 0 296 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="296" height="3" rx="1.5" fill="#EAEAEA" />
              <rect x="15" width="185" height="3" rx="1.5" fill="#A65CF0" />
              <path
                d="M10.0197 13C9.25466 13 8.76283 12.1878 9.11724 11.5096L14.8467 0.546693C15.2355 -0.197262 16.3067 -0.177781 16.6682 0.579819L21.8994 11.5428C22.222 12.2187 21.7293 13 20.9804 13L10.0197 13Z"
                fill="#A65CF0" />
              <path
                d="M193.02 13C192.255 13 191.763 12.1878 192.117 11.5096L197.847 0.546693C198.236 -0.197262 199.307 -0.177781 199.668 0.579819L204.899 11.5428C205.222 12.2187 204.729 13 203.98 13L193.02 13Z"
                fill="#A65CF0" />
            </svg>
          </fieldset>
          <fieldset class="form__block">
            <legend class="form__legend">Скидка</legend>
            <ul class="check-list">
              <li class="check-list__item">
                <label class="check-list__label">
                  <input class="check-list__check sr-only" type="checkbox" name="volume" value="8">
                  <span class="check-list__desc">Более 5 000</span>
                </label>
              </li>
              <li class="check-list__item">
                <label class="check-list__label">
                  <input class="check-list__check sr-only" type="checkbox" name="volume" value="8">
                  <span class="check-list__desc">Менее 5 000</span>
                </label>
              </li>
              <li class="check-list__item">
                <label class="check-list__label">
                  <input class="check-list__check sr-only" type="checkbox" name="volume" value="8">
                  <span class="check-list__desc">Не важно</span>
                </label>
              </li>
            </ul>
          </fieldset>
          <fieldset class="form__block">
            <legend class="form__legend">Цвет</legend>
            <ul class="check-list">
              <li class="check-list__item" v-for="color in colors" :key="color.id">
                <label class="check-list__label">
                  <input class="check-list__check sr-only" type="checkbox" name="volume" value="8">
                  <span class="check-list__desc">{{ color.color }}</span>
                </label>
              </li>
            </ul>
          </fieldset>
        </form>
        <div class="catalog-ocsford">
          <div class="catalog-ocsford__img"></div>
          <div class="catalog-ocsford__block">
            <h3 class="catalog-ocsford__title">Оксфорд 1950</h3>
            <div class="catalog-ocsford__text">Новая коллекция изысканных кресел</div>
            <router-link :to="{ name: 'catalog' }" class="top-categories__card__catalog">
              <span>В каталог</span>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_48067_596)">
                  <circle cx="11" cy="11" r="10" stroke="inherit" stroke-width="2" />
                  <path d="M9.625 7.5625L13.0625 11L9.625 14.4375" stroke="inherit" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
            </router-link>
          </div>
        </div>
      </aside>
      <section class="catalog">
        <h1 class="catalog__title">Каталог</h1>
        <form action="#" class="catalog-form">
          <label for="">
            <h2 class="catalog-form__title">Фильтры:</h2>
            <select name="" id="">
              <option value="option1">Категория</option>
            </select>
            <select name="" id="">
              <option value="option1">Цена</option>
            </select>
            <select name="" id="">
              <option value="option1">Скидка</option>
            </select>
            <select name="" id="">
              <option value="option1">Цвет</option>
            </select>
          </label>
        </form>
        <div class="hight-rating__block catalog__block">
          <div class="hight-rating__block__card" v-for="item in products" :key="item.id">
            <div class="hight-rating__block__card__rate">
              <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.2257 5.28193L10.5089 4.59758L8.40032 0.330127C8.34273 0.213287 8.24799 0.118702 8.13095 0.0612089C7.83742 -0.0834504 7.48074 0.037099 7.33398 0.330127L5.22543 4.59758L0.508622 5.28193C0.378579 5.30047 0.259684 5.36167 0.168654 5.45441C0.0586046 5.56733 -0.00203778 5.71924 5.22879e-05 5.87678C0.00214235 6.03431 0.0667938 6.18457 0.179801 6.29454L3.59248 9.61614L2.78622 14.3064C2.76731 14.4156 2.7794 14.5278 2.82113 14.6304C2.86285 14.733 2.93253 14.8218 3.02228 14.8869C3.11202 14.952 3.21823 14.9906 3.32886 14.9985C3.4395 15.0064 3.55013 14.9831 3.64821 14.9314L7.86715 12.717L12.0861 14.9314C12.2013 14.9926 12.335 15.013 12.4632 14.9908C12.7865 14.9352 13.0038 14.6291 12.9481 14.3064L12.1418 9.61614L15.5545 6.29454C15.6474 6.20367 15.7087 6.08497 15.7273 5.95515C15.7774 5.63059 15.5508 5.33015 15.2257 5.28193Z"
                  fill="#FF862F" />
              </svg>
              <span>{{ item.rating }}</span>
            </div>
            <router-link :to="{ name: 'product', params: { id: item.id } }">
              <img :src="item.image" :alt="item.title" class="hight-rating__block__card__img">
            </router-link>
            <router-link :to="{ name: 'product', params: { id: item.id } }">
              <h3 class="hight-rating__block__card__subtitle">{{ item.title }}</h3>
            </router-link>
            <div class="hight-rating__block__card__price">{{ item.price }} руб</div>
            <router-link :to="{ name: 'product', params: { id: item.id } }">
              <button class="btn2 hight-rating__block__card__btn">Купить</button>
            </router-link>
          </div>
        </div>
        <BasePagination v-model:page="page" :count="countProducts" :per-page="productsPerPage"
          :per-page2="productsPerPage2" />
      </section>
    </div>
  </div>
</template>

<script>
import catalog from '@/data/catalog'
import categories from '@/data/categories'
import colors from '@/data/colors'
import BasePagination from '@/components/BasePagination.vue'

export default {
  name: "CatalogView",
  data() {
    return {
      catalog,
      categories,
      colors,

      page: 1,
      productsPerPage: 9,
      productsPerPage2: 6,
    };
  },
  components: { BasePagination, },
  computed: {
    products() {
      const offset = (this.page - 1) * this.productsPerPage;
      const offset2 = (this.page - 1) * this.productsPerPage2;
      if (window.innerWidth > 952) {
        return this.catalog.slice(offset, offset + this.productsPerPage);
      }
      return this.catalog.slice(offset2, offset2 + this.productsPerPage2);
    },
    countProducts() {
      return this.catalog.length;
    },
  },
}
</script>

<style lang="scss">
@import "../assets/css/media-catalog.scss";
</style>
