<template>
  <div class="about" style=" padding:0;">
    <TopBar></TopBar>
    <CarouselBgShop></CarouselBgShop>
    <div style="margin: 50px">
      <carousel
        :perPage="5"
        :autoplay="true"
        :autoplayHoverPause="true"
        :paginationSize="15"
        navigationPrevLabel="Default"
        style="background: #fff"
      >
        <slide
          data-index="0"
          data-name="MySlideName"
          @slideclick="handleSlideClick"
        >
          <img
            src="../../public/assets/images/anvat.jpg"
            style="width: 250px; height: auto"
          />
        </slide>
        <slide
          data-index="0"
          data-name="MySlideName"
          @slideclick="handleSlideClick"
        >
          <img
            src="../../public/assets/images/anvat.jpg"
            style="width: 250px; height: auto"
          />
        </slide>
        <slide
          data-index="0"
          data-name="MySlideName"
          @slideclick="handleSlideClick"
        >
          <img
            src="../../public/assets/images/anvat.jpg"
            style="width: 250px; height: auto"
          />
        </slide>
        <slide
          data-index="0"
          data-name="MySlideName"
          @slideclick="handleSlideClick"
        >
          <img
            src="../../public/assets/images/anvat.jpg"
            style="width: 250px; height: auto"
          />
        </slide>
        <slide
          data-index="0"
          data-name="MySlideName"
          @slideclick="handleSlideClick"
        >
          <img
            src="../../public/assets/images/anvat.jpg"
            style="width: 250px; height: auto"
          />
        </slide>
        <slide
          data-index="0"
          data-name="MySlideName"
          @slideclick="handleSlideClick"
        >
          <img
            src="../../public/assets/images/anvat.jpg"
            style="width: 250px; height: auto"
          />
        </slide>
      </carousel>
    </div>

    <div class="container">
      <div
        class="col-sm-3 card"
        style="width: 15rem; float: left; margin: 0 15px 20px"
      >
        <img
          class="card-img-top"
          src="../../public/assets/images/anvat.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>

      <div
        class="col-sm-3 card"
        style="width: 15rem; float: left; margin: 0 15px 20px"
      >
        <img
          class="card-img-top"
          src="../../public/assets/images/anvat.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div
        class="col-sm-3 card"
        style="width: 15rem; float: left; margin: 0 15px 20px"
      >
        <img
          class="card-img-top"
          src="../../public/assets/images/anvat.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>

      <div
        class="col-sm-3 card"
        style="width: 15rem; float: left; margin: 0 15px 20px"
      >
        <img
          class="card-img-top"
          src="../../public/assets/images/anvat.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div
        class="col-sm-3 card"
        style="width: 15rem; float: left;margin: 0 15px 20px"
      >
        <img
          class="card-img-top"
          src="../../public/assets/images/anvat.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>

      <div
        class="col-sm-3 card"
        style="width: 15rem; float: left;margin: 0 15px 20px"
      >
        <img
          class="card-img-top"
          src="../../public/assets/images/anvat.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>

      <div
        class="col-sm-3 card"
        style="width: 15rem; float: left;margin: 0 15px 20px"
      >
        <img
          class="card-img-top"
          src="../../public/assets/images/anvat.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>

      <div
        class="col-sm-3 card"
        style="width: 15rem; float: left;margin: 0 20px 20px"
      >
        <img
          class="card-img-top"
          src="../../public/assets/images/anvat.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>

      <div
        class="col-sm-3 card"
        style="width: 15rem; float: left;margin: 0 20px 20px"
      >
        <img
          class="card-img-top"
          src="../../public/assets/images/anvat.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
    <div class="clear"></div>
    <Pagination></Pagination>
  </div>
</template>
<script>
import CarouselBgShop from "../components/CarouselBgShop.vue";
import TopBar from "../components/Topbar";
import Pagination from "../components/Pagination";

import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    CarouselBgShop,
    Carousel,
    Slide,
    TopBar,
    Pagination,
  },
};
</script>
<style lang=""></style>
