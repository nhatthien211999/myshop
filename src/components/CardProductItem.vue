<template lang="">
  <div style=" clear: both; margin-bottom:15px;">
    <div class="opentime-status">
      <span
        class="stt online"
        title="Mở cửa"
        style="color: rgb(35, 152, 57);background-color: rgb(35, 152, 57);"
      ></span>
    </div>
    <div style="border:none;">
      <div class="row">
        <div class="col-4">
          <img
            style="border: 2px solid #d7d7d7;border-radius: 7px; width: 100%;"
            src="https://images.foody.vn/res/g106/1050879/prof/s280x175/foody-upload-api-foody-mobile-10-201126164806.jpg"
            alt="Card image"
          />
        </div>
        <div class="col-8" style="padding: 0px 2px 0px 8px;">
          <h1 class="product-name">{{ product.name }}</h1>
          <div class="promotion" style="padding:0px;">
            {{ product.address }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["product"],
};
</script>
<style lang=""></style>
