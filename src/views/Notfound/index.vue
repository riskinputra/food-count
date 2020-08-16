<template>
  <div class="notfound">
    <div class="notfound-content">
      <img src="@/assets/404.png" alt="404-notfound" />
      <div class="full-width">
        <v-btn color="#FB8C00" outline small dark @click="$router.push('/')">
          <v-icon class="mr-10">mdi-arrow-left</v-icon>Back to Home
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notfound"
};
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>
