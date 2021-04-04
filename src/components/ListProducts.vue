<template lang="">
  <div class="list-wrapper-scroll-y">
    <div class="input-group" style="margin-top: 50px">
      <input
        type="text"
        class="form-control"
        placeholder="Nhập địa chỉ giao hàng"
        style="height: 45px"
      />
      <div class="input-group-append">
        <button type="submit" style="with: 25px" class="btn btn-secondary">
          <i class="ti-location-pin"></i>
        </button>
      </div>
    </div>
    <!-- ------------------------------------ -->
    <div class="row products">
      <p style="float:left; padding: 0 52% 0 30px">Sản phẩm mua nhiều nhất</p>
      <a href="#">xem tất cả</a>

      <div class="row" style="clear: both; margin: 0 20px; ">
        <div
          class="col-md-4"
          style="margin-bottom:5px;"
          v-for="(product, index) in products"
          :key="index"
        >
          <CardProduct v-bind:product="product"></CardProduct>
        </div>
      </div>
      <div class="col" style="text-align: center;">
        <a href="#">Xem thêm <i class="ti-reload"></i></a>
      </div>
    </div>

    <div class="row products">
      <p style="float:left; padding: 0 63% 0 30px">Phiếu giảm giá</p>
      <a href="#">xem tất cả</a>

      <div class="row" style="clear: both; margin: 0 20px; ">
        <div
          class="col-md-4"
          style="margin-bottom:5px;"
          v-for="(product, index) in products"
          :key="index"
        >
          <CardProduct v-bind:product="product"></CardProduct>
        </div>
      </div>
      <div class="col" style="text-align: center;">
        <a href="#">Xem thêm <i class="ti-reload"></i></a>
      </div>
    </div>

    <div class="row products">
      <div class="col-md-2" style="text-align: center">
        <a href="#">Gần tôi</a>
      </div>
      <div class="col-md-2" style="text-align: center">
        <a href="#">Bán chạy</a>
      </div>
      <div class="col-md-2" style="text-align: center">
        <a href="#">Đánh giá</a>
      </div>
      <div class="col-md-2" style="text-align: center">
        <a href="#">Nổi bật</a>
      </div>
      <div class="col-md-4" style="text-align: center">
        <select name="" id="">
          <option>quận/huyện</option>
          <option>tp hcm</option>
          <option>hà nội</option>
        </select>
      </div>
      <div class="col-12" style="margin: 15px;">
        <div
          style="margin-bottom:5px;"
          v-for="(product, index) in products"
          :key="index"
        >
          <CardProductItem v-bind:product="product"></CardProductItem>
        </div>
        <div class="col" style="text-align: center;">
          <a href="#">Xem thêm <i class="ti-reload"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CardProduct from "./CardProduct.vue";
import CardProductItem from "./CardProductItem.vue";

export default {
  name: "HelloWorld",
  components: {
    CardProduct,
    CardProductItem,
  },
  data() {
    return {
      products: [
        {
          image:
            "https://images.foody.vn/res/g106/1050879/prof/s280x175/foody-upload-api-foody-mobile-10-201126164806.jpg",
          name: "tên món ăn",
          address: "địa chỉ bán",
          sale: "giảm giá",
        },
        {
          image:
            "https://images.foody.vn/res/g106/1050879/prof/s280x175/foody-upload-api-foody-mobile-10-201126164806.jpg",
          name: "tên món ăn",
          address: "địa chỉ bán",
          sale: "giảm giá",
        },
        {
          image:
            "https://images.foody.vn/res/g106/1050879/prof/s280x175/foody-upload-api-foody-mobile-10-201126164806.jpg",
          name: "tên món ăn",
          address: "địa chỉ bán",
          sale: "giảm giá",
        },
        {
          image:
            "https://images.foody.vn/res/g106/1050879/prof/s280x175/foody-upload-api-foody-mobile-10-201126164806.jpg",
          name: "tên món ăn",
          address: "địa chỉ bán",
          sale: "giảm giá",
        },
        {
          image:
            "https://images.foody.vn/res/g106/1050879/prof/s280x175/foody-upload-api-foody-mobile-10-201126164806.jpg",
          name: "tên món ăn",
          address: "địa chỉ bán",
          sale: "giảm giá",
        },
        {
          image:
            "https://images.foody.vn/res/g106/1050879/prof/s280x175/foody-upload-api-foody-mobile-10-201126164806.jpg",
          name: "tên món ăn",
          address: "địa chỉ bán",
          sale: "giảm giá",
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
