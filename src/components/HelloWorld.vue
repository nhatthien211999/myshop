<template>
  <div style="background-color: #000; padding:0; color: white">
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
              Đăng Nhập
            </button>
          </div>
        </div>
      </div>
    </nav>
    <session id="content">
      <div class="banner">
        <div class="container">
          <div class="row">
            <div class="col-md-5" style="padding: 30px">
              <div
                style="color:white; margin: 70px 50px 30px 0px; font-weight: 500;"
              >
                <h4>Đặt Thực phẩm, giao hàng từ 20'...</h4>
                Có 1449 Địa Điểm Ở TP. HCM Từ 00:00 - 23:59
              </div>
              <div class="input-group mb-3" style="margin: 0 50px 0 0; ">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search"
                  style="height: 45px;"
                />
                <div class="input-group-append">
                  <button
                    class="btn btn-success"
                    type="submit"
                    style="with: 25px"
                  >
                    Go
                  </button>
                </div>
              </div>
              <div class="options">
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  style="margin: 0 20px 20px 0"
                >
                  all
                </button>
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  style="margin: 0 20px 20px 0"
                >
                  đặc sản
                </button>
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  style="margin: 0 20px 20px 0"
                >
                  chay
                </button>
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  style="margin: 0 20px 20px 0"
                >
                  trái cây
                </button>
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  style="margin: 0 20px 20px 0"
                >
                  thịt/trứng
                </button>
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  style="margin: 0 20px 20px 0"
                >
                  hải sản
                </button>
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  style="margin: 0 20px 20px 0"
                >
                  rau củ
                </button>
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  style="margin: 0 20px 20px 0"
                >
                  gạo mì
                </button>
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  style="margin: 0 20px 20px 0"
                >
                  đồ uống/ăn vặt
                </button>
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  style="margin: 0 20px 20px 0"
                >
                  gia vị
                </button>
              </div>
              <p
                style="color:white; font-weight: 350; font-style: italic; font-size: 20px;"
              >
                Sử dụng App Now để có nhiều giảm giá <br />
                và trải nghiệm tốt hơn
              </p>
            </div>
            <div
              class="col-md-7  my-custom-scrollbar"
              style="padding: 0; margin"
            >
              <ListProducts></ListProducts>
            </div>
          </div>
        </div>
      </div>
    </session>
    <section id="delivery">
      <div class="container" style="margin-top:30px; color: #000">
        <div class="row">
          <h1>Đơn hàng của bạn sẽ được bảo quản như thế nào?</h1>
          <p>
            Now sẽ bảo quản đơn của bạn bằng túi & thùng để chống nắng mưa, giữ
            nhiệt... trên đường đi một cách tốt nhất.
          </p>
          <img
            src="https://www.now.vn/app/assets/img/Box-food-preservation-footer.jpg?42147a4a586d72f2b7a21ea97478898e"
            alt=""
          />
        </div>
      </div>
    </section>
    <section id="payment" style="margin-top:30px; color: #000">
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <h1>NowMerchant App</h1>
            <p>
              - NowMerchant is an order management application for partner
              restaurants of on-site ordering service
            </p>
            <p>
              - Now.vn is always ready to cooperate with restaurants, cafes,
              cafes ... to expand business as well as increase customers.
              Connect to the ordering and delivery system to reduce management,
              operation, marketing, technology ... Register to join: here
            </p>
            <p>
              - Foody also provides Now POS which built-in Now.vn, store owners
              can track orders / visitors, update information / images / menus
              for Microsite with many features. other advantages. Sign up for a
              free trial here!
            </p>
          </div>
          <div class="col-md-5">
            <img
              src="https://www.now.vn/app/assets/img/banner-phone-reg-merchant.png?f9e17674dd5098225fb5eb0a55b95c45"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    <section id="intro" style="margin-top:30px; color: #000">
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <p>
              Now.vn Hợp tác nhân viên giao nhận - Now Partners Giúp bạn tăng
              thu nhập trong thời gian rảnh rỗi Now tìm kiếm hợp tác với các cá
              nhân để thực hiện việc giao hàng, chúng tôi sẽ cung cấp ứng dụng
              (app), 1 số dụng cụ cần thiết để bạn có thể tiếp nhận & giao hàng,
              kiếm thêm thu nhập Đăng ký tham gia tại đây hoặc gửi Email qua
              jobs@gofast.vn - hoặc gọi qua số điện thoại 0286 656 9769.
            </p>
          </div>
          <div class="col-md-5">
            <img
              src="https://www.now.vn/app/assets/img/bg-deliverynow-dat-mon-truc-tuyen-giao-hang-tan-noi.png?b05356770176f467df57c4dc54c94c01"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    <section id="add">
      <div class="container">
        <div class="row" style="margin-top:30px;">
          <h1>NowFresh - Đi chợ online gói gọn trong bàn tay</h1>
          <p>
            NowFresh là một trong những ứng dụng đi chợ online có sức ảnh hưởng
            và thu hút sự chú ý của nhiều người dùng với loạt ưu điểm sáng giá,
            như chỉ cần vài cú click đơn giản là bạn có thể dễ dàng lựa chọn
            những loại thực phẩm tươi ngon nhất cho bữa cơm gia đình dù đang ở
            nơi đâu. Tiết kiệm thời gian, hàng lọat deal giảm giá, không chen
            chúc mua đồ và xếp hàng thanh toán
          </p>
          <p>
            Bạn có thể đặt mua online thịt, cá , trứng, sữa, trái cây, rau củ
            quả và rất nhiều mặt hàng tươi sống khác nữa trên hệ thống của
            NowFresh.
          </p>
          <h1>Tại sao lại lựa chọn đặt thực phẩm online qua NowFresh?</h1>
          <p>
            Là ứng dụng đi chợ online đầu tiên tại Việt Nam, NowFresh đã mang
            lại nhiều ưu thế cũng như cạnh tranh mạnh mẽ so với các nền tảng đối
            thủ khác cũng như so với cách đi chợ truyền thống
          </p>
          <ul>
            <li>
              Danh sách siêu thị, cửa hàng tiện lợi được cập nhật thường xuyên ở
              tỉnh thành khác nhau, cập nhật liên tục về địa điểm, giá cả và
              thời gian; giúp việc đi chợ trực tuyến trở nên dễ dàng
            </li>
            <li>
              Ưu đãi ngập tràn: deal giảm giá, đồng giá khủng từ hàng loạt cửa
              hàng hợp tác trên NowFresh: Homefarm, Farmer Market, MEATDeli,...
            </li>
            <li>
              Nguồn hàng tươi sống an toàn - giá rẻ: Chợ thực phẩm online là nơi
              có thể mua rau củ quả, thịt, cá, hải sản, trái cây nội/ ngoại
              nhập, gạo, gia vị, trà, thực phẩm dinh dưỡng... với định lượng rõ
              ràng. Thậm chí bạn còn có thể tìm thấy những món đặc sản vùng miền
              ngay trên NowFresh mà không cần cất công tìm kiếm cửa hàng. Nếu
              bạn còn băn khoăn mua thực phẩm tươi sống online trên Now có đảm
              bảo không thì hoàn toàn có thể tin tưởng với chính sách và dịch vụ
              khách hàng của Now.
            </li>
            <li>
              Tiện dụng và tiết kiệm: với ứng dụng đi chợ trực tuyến Now, hỗ trợ
              bạn tìm kiếm và mua thực phẩm online đúng nhu cầu, uy tín và có
              nguồn cung cấp rõ ràng có thương hiệu trên thị trường. Ngoài việc
              tiết kiệm chi phí đi lại, hình thức đi chợ online còn có nhiều ưu
              điểm khác: miễn phí ship đồ ăn online trong vòng bán kính 3km,
              giao hàng siêu tốc 1 tiếng...
            </li>
          </ul>
          <h1>Trải nghiệm thân thiện, thanh toán đơn giản với App Now</h1>
          <p>
            Giao diện NowFresh được tối ưu với các đề mục cụ thể, đồng thời phân
            chia rõ thành các bộ sưu tập khác nhau trên ứng dụng giúp cho việc
            đi chợ online trở nên dễ dàng hơn. Chưa kể, nhằm tiếp tục mang đến
            sự thuận tiện cho người dùng, NowFresh - dịch vụ đi chợ mua thực
            phẩm tươi sống online đã có mặt trên ứng dụng Shopee - mang đến trải
            nghiệm mua sắm trực tuyến thuận tiện, nhanh chóng và an toàn trong
            mua sắm.
          </p>
          <p>
            Ứng dụng đi chợ bên cạnh hình thức trả tiền mặt khi nhận hàng, người
            dùng Now còn có thể thanh toán qua ví điện tử Air Pay với nhiều ưu
            đãi hấp dẫn, thẻ tín dụng (Visa/Mastercard), thẻ ATM hoặc tài khoản
            ngân hàng online (iBanking).
          </p>
        </div>
      </div>
    </section>
    <section id="category">
      <div class="container">
        <div class="row" style="padding-left: 12px;">
          <p>DANH MỤC</p>
        </div>
        <div class="row">
          <div class="col-md-3">
            <p>dặt bàn</p>
            <p>thực phẩm</p>
            <p>
              Ăn chay/Trái cây/Gia vị/Đặc sản/Thịt/trứng/Hải sản/Rau củ/Gạo
              mì/Đồ uống/Ăn vặt
            </p>
          </div>
          <div class="col-md-3">
            <p>thuốc</p>
            <p>
              Hoá mỹ phẩm/BCS/Thiết bị/Vitamins/Thuốc tây/Khẩu trang/Khẩn cấp
            </p>
            <p>thú cưng</p>
            <span>thú cưng</span>
            <p>rượu bia</p>
            <span>rượu/bia</span>
          </div>
          <div class="col-md-3">
            <p>đồ ăn home</p>
            <p>giặt ủi</p>
            <p>Giặt ủi Giày Thú bông Giặt hấp Vệ sinh công nghiệp</p>
          </div>
          <div class="col-md-3">
            <p>sản phẩm</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ListProducts from "./ListProducts.vue";

export default {
  components: {
    ListProducts,
  },
};
</script>
<style scoped>
.my-custom-scrollbar {
  position: relative;
  height: 700px;
  overflow: auto;
}
.list-wrapper-scroll-y {
  display: block;
}
.my-custom-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
