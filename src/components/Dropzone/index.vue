<template>
  <vue-dropzone
    id="dropzone"
    class="dropzone-file"
    :options="dropzoneOptions"
    :useCustomSlot="true"
  >
    <v-row>
      <v-col cols="12" sm="12">
        <div class="dropzone-custom-content">
          <v-icon large color="#FB8C00">mdi-cloud-upload</v-icon>
          <h3 class="dropzone-custom-title">
            Drag and drop to upload content!
          </h3>
          <div class="subtitle">
            ...or click to select a file from your computer
          </div>
        </div>
      </v-col>
    </v-row>
  </vue-dropzone>
</template>

<script>
import vueDropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

export default {
  name: "Dropzone",
  components: {
    vueDropzone
  },
  data: function() {
    return {
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 200,
        addRemoveLinks: true,
        maxFilesize: 3,
        acceptedFiles: ".jpg, .jpeg, .png"
      }
    };
  }
};
</script>

<style lang="scss">
@import "./styles.scss";
</style>
