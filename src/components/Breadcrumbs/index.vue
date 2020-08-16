<template>
  <div class="breadcrumbs">
    <v-container>
      <ul>
        <li v-for="(item, index) in items" :key="index">
          <div v-if="!item.disabled">
            <router-link :to="item.path">{{ item.text }}</router-link>
            <span class="breadcrumbs-icon">
              <v-icon small>mdi-chevron-right</v-icon>
            </span>
          </div>
        </li>
        <li>
          <div class="current">{{ current }}</div>
        </li>
      </ul>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Breadcrumbs",
  props: {
    items: {
      type: Array,
      required: true
    },
    current: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>
