<template>
  <section class="top-categories">
    <h2 class="top-categories__title">Топ категории</h2>
    <div class="top-categories__block">
      <div class="top-categories__card top-categories__card__item1">
        <div>
          <div class="top-categories__card__type top-categories__card__type__item1">
            <a>Прямые</a>
            <a>Угловые</a>
            <a>Модульные</a>
          </div>
          <h3 class="top-categories__card__subtitle top-categories__card__subtitle__item1">
            <span>Диваны</span>
            <svg id="subtitle-arrow" width="22" height="22" viewBox="0 0 22 22" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_48067_596)">
                <circle cx="11" cy="11" r="10" stroke="inherit" stroke-width="2" />
                <path d="M9.625 7.5625L13.0625 11L9.625 14.4375" stroke="inherit" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </g>
            </svg>
          </h3>
        </div>
        <picture class="top-categories__card__img">
          <source media="(max-width: 624px)" srcset="../assets/img/top1-320.png">
          <img src="../assets/img/top1.png" alt="top1">
        </picture>
        <router-link :to="{ name: 'catalog' }" class="top-categories__card__catalog top-categories__card__catalog__item1">
          <span>В каталог</span>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_48067_596)">
              <circle cx="11" cy="11" r="10" stroke="inherit" stroke-width="2" />
              <path d="M9.625 7.5625L13.0625 11L9.625 14.4375" stroke="inherit" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </g>
          </svg>
        </router-link>
      </div>
      <div class="top-categories__card top-categories__card__item2">
        <div>
          <div class="top-categories__card__type">
            <a>Мягкие</a>
            <a>Кресла-кровати</a>
          </div>
          <h3 class="top-categories__card__subtitle">
            <span>Кресла</span>
            <svg id="subtitle-arrow" width="22" height="22" viewBox="0 0 22 22" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_48067_596)">
                <circle cx="11" cy="11" r="10" stroke="inherit" stroke-width="2" />
                <path d="M9.625 7.5625L13.0625 11L9.625 14.4375" stroke="inherit" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </g>
            </svg>
          </h3>
        </div>
        <picture class="top-categories__card__img">
          <source media="(max-width: 624px)" srcset="../assets/img/top2-320.png">
          <source media="(max-width: 1280px)" srcset="../assets/img/top2-1024.png">
          <img src="../assets/img/top2.png" alt="top2">
        </picture>
        <router-link :to="{ name: 'catalog' }" class="top-categories__card__catalog">
          <span>В каталог</span>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_48067_596)">
              <circle cx="11" cy="11" r="10" stroke="inherit" stroke-width="2" />
              <path d="M9.625 7.5625L13.0625 11L9.625 14.4375" stroke="inherit" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </g>
          </svg>
        </router-link>
      </div>
      <div class="top-categories__card top-categories__card-mini">
        <div>
          <div class="top-categories__card__type">
            <a>Односпальные</a>
            <a>Двуспальные</a>
          </div>
          <h3 class="top-categories__card__subtitle">
            <span>Кровати</span>
            <svg id="subtitle-arrow" width="22" height="22" viewBox="0 0 22 22" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_48067_596)">
                <circle cx="11" cy="11" r="10" stroke="inherit" stroke-width="2" />
                <path d="M9.625 7.5625L13.0625 11L9.625 14.4375" stroke="inherit" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </g>
            </svg>
          </h3>
        </div>
        <picture class="top-categories__card__img">
          <source media="(max-width: 624px)" srcset="../assets/img/top3-320.png">
          <source media="(max-width: 1280px)" srcset="../assets/img/top3-1024.png">
          <img src="../assets/img/top3.png" alt="top3">
        </picture>
        <router-link :to="{ name: 'catalog' }" class="top-categories__card__catalog">
          <span>В каталог</span>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_48067_596)">
              <circle cx="11" cy="11" r="10" stroke="inherit" stroke-width="2" />
              <path d="M9.625 7.5625L13.0625 11L9.625 14.4375" stroke="inherit" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </g>
          </svg>
        </router-link>
      </div>
      <div class="top-categories__card top-categories__card-mini
                  top-categories__card__item4">
        <div>
          <div class="top-categories__card__type">
            <a>Тумбы</a>
            <a>комоды</a>
          </div>
          <h3 class="top-categories__card__subtitle top-categories__card__subtitle__item4">
            <span>Тумбы и&nbsp;комоды</span>
            <svg id="subtitle-arrow" width="22" height="22" viewBox="0 0 22 22" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_48067_596)">
                <circle cx="11" cy="11" r="10" stroke="inherit" stroke-width="2" />
                <path d="M9.625 7.5625L13.0625 11L9.625 14.4375" stroke="inherit" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </g>
            </svg>
          </h3>
        </div>
        <picture class="top-categories__card__img">
          <source media="(max-width: 624px)" srcset="../assets/img/top4-320.png">
          <source media="(max-width: 1280px)" srcset="../assets/img/top4-1024.png">
          <img src="../assets/img/top4.png" alt="top4">
        </picture>
        <router-link :to="{ name: 'catalog' }" class="top-categories__card__catalog">
          <span>В каталог</span>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_48067_596)">
              <circle cx="11" cy="11" r="10" stroke="inherit" stroke-width="2" />
              <path d="M9.625 7.5625L13.0625 11L9.625 14.4375" stroke="inherit" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </g>
          </svg>
        </router-link>
      </div>
      <div class="top-categories__card top-categories__card-mini top-categories__card__item5">
        <div>
          <div class="top-categories__card__type">
            <a>Деревянные</a>
            <a>Металлокаркас</a>
          </div>
          <h3 class="top-categories__card__subtitle">
            <span>Стулья</span>
            <svg id="subtitle-arrow" width="22" height="22" viewBox="0 0 22 22" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_48067_596)">
                <circle cx="11" cy="11" r="10" stroke="inherit" stroke-width="2" />
                <path d="M9.625 7.5625L13.0625 11L9.625 14.4375" stroke="inherit" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </g>
            </svg>
          </h3>
        </div>
        <picture class="top-categories__card__img">
          <source media="(max-width: 624px)" srcset="../assets/img/top5-320.png">
          <source media="(max-width: 1280px)" srcset="../assets/img/top5-1024.png">
          <img src="../assets/img/top5.png" alt="top5">
        </picture>
        <router-link :to="{ name: 'catalog' }" class="top-categories__card__catalog">
          <span>В каталог</span>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_48067_596)">
              <circle cx="11" cy="11" r="10" stroke="inherit" stroke-width="2" />
              <path d="M9.625 7.5625L13.0625 11L9.625 14.4375" stroke="inherit" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </g>
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>
  
<script>
export default {
  name: 'HomeTopCategories',
}
</script>