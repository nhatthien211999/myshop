<template lang="">
  <div
    id="demo"
    class="container-fluid carousel slide"
    data-ride="carousel"
    style="padding: 0"
  >
    <!-- Indicators -->
    <ul class="carousel-indicators">
      <li data-target="#demo" data-slide-to="0" class="active"></li>
      <li data-target="#demo" data-slide-to="1"></li>
      <li data-target="#demo" data-slide-to="2"></li>
    </ul>

    <!-- The slideshow -->
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="../../public/assets/images/carousel-bg1.jpg"
          alt="Los Angeles"
          style="height: 350px; width: 100%; padding: 0"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../public/assets/images/carousel-bg2.jpg"
          alt="Los Angeles"
          style="height: 350px; width: 100%; padding: 0"
        />
      </div>
      <div class="carousel-item">
        <img
          src="../../public/assets/images/carousel-bg3.jpg"
          alt="Los Angeles"
          style="height: 350px; width: 100%; padding: 0"
        />
      </div>
    </div>

    <!-- Left and right controls -->
    <a class="carousel-control-prev" href="#demo" data-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </a>
    <a class="carousel-control-next" href="#demo" data-slide="next">
      <span class="carousel-control-next-icon"></span>
    </a>
    <div class="carousel-caption">
      <h3>Danh sách món ăn</h3>
      <p>Cảm ơn quý khách đã chọn chúng tôi!</p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
