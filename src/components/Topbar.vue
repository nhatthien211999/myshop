<template lang="">
  <div>
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
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><router-link to="/">Trang chủ</router-link></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><router-link to="/about">Món ăn</router-link></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><router-link to="/profile">Thông tin</router-link></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Đồ uống</a>
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
              <i class="ti-search" style="color: #000"></i>
            </a>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
              style="padding: 0"
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
                    <button
                      type="button"
                      class="btn btn-primary"
                      style="color: #000"
                    >
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
              <router-link to="/login">Đăng Nhập</router-link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
