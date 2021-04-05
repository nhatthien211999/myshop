<template>
  <div class="about" style="background-color: #ff1; padding:0;">
    <nav class="navbar navbar-fixed-top navbar-expand-lg" style="padding: 0">
      <div class="container-fluid" style="background-color: #fff; padding:10px">
        <img
          class="navbar-brand"
          src="../../public/assets/images/logo.png"
          width="40px"
        />

        <div class="dropdown">
          <button
            type="button"
            class="btn btn-primary dropdown-toggle"
            data-toggle="dropdown"
          >
            TP.HCM
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">HÀ NỘI</a>
            <a class="dropdown-item" href="#">ĐÀ NẮNG</a>
            <a class="dropdown-item" href="#">CẦN THƠ</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Another link</a>
          </div>
        </div>

        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#"
                >Đồ Ăn<span class="sr-only">(current)</span></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><router-link to="/about">Đặt bàn</router-link></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Hoa</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Bia</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Siêu Thị</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Thuốc</a>
            </li>
            <li class="nav-item" style="padding-top: 5%; font-size: 5px;">
              <div class="dropdown">
                <div data-toggle="dropdown" role="button">
                  <span>
                    <i class="ti-arrow-circle-down" style="font-size: 10px"></i>
                  </span>
                </div>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Thú cưng</a>
                  <a class="dropdown-item" href="#">Giặt ủi</a>
                </div>
              </div>
            </li>
          </ul>
          <div class="form-inline my-2 my-md-0">
            <a
              type="submit"
              data-toggle="modal"
              data-target="#exampleModal"
              data-whatever="@fat"
              style="margin: 15px"
            >
              <i class="ti-search"></i>
            </a>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <img
                      class="modal-title"
                      id="exampleModalLabel"
                      src="../../public/assets/images/daubep.jpg"
                      width="100%"
                    />
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form>
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control max-width "
                          id="recipient-name"
                          placeholder="Nhập sản phẩm bạn muốn tìm kiếm... "
                        />
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Đóng
                    </button>
                    <button type="button" class="btn btn-primary">
                      Tìm kiếm
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button"
              class="btn btn-outline-primary"
              style="color: #000"
            >
              Đăng Nhập
            </button>
          </div>
        </div>
      </div>
    </nav>
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
        style="width: 15rem; float: left; margin: 0 10px 20px 10px"
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
        style="width: 15rem; float: left; margin: 0 10px 20px 10px"
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
        style="width: 15rem; float: left; margin: 0 10px 20px 10px"
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
        style="width: 15rem; float: left; margin: 0 10px 20px 10px"
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
        style="width: 15rem; float: left;margin: 0 10px 20px 10px"
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
        style="width: 15rem; float: left;margin: 0 10px 20px 10px"
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
        style="width: 15rem; float: left;margin: 0 10px 20px 10px"
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
        style="width: 15rem; float: left;margin: 0 10px 20px 10px"
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
        style="width: 15rem; float: left;margin: 0 10px 20px 10px"
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
    <nav
      aria-label="Page navigation example"
      class="container"
      style="display: flex"
    >
      <ul class="pagination" style="margin: auto; padding: 0 0 20px 0">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </nav>
  </div>
</template>
<script>
import CarouselBgShop from "../components/CarouselBgShop.vue";

import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    CarouselBgShop,
    Carousel,
    Slide,
  },
};
</script>
<style lang=""></style>
