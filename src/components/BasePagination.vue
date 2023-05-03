<template>
  <ul class="catalog__pagination pagination">
    <li class="pagination__item" v-for="pageNumber in pages" :key="pageNumber.id">
      <a href="#" class="pagination__link" :class="{ 'pagination__link--current': pageNumber === page }"
        @click.prevent="paginate(pageNumber)">
        {{ pageNumber }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['page', 'count', 'perPage', 'perPage2'],
  computed: {
    pages() {
      if (window.innerWidth > 952) {
        return Math.ceil(this.count / this.perPage);
      }
      return Math.ceil(this.count / this.perPage2);
    },
  },
  methods: {
    paginate(page) {
      this.$emit('update:page', page);
    },
  },
};
</script>
