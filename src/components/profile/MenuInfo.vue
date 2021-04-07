<template lang="">
  <div>
    <nav class="navbar navbar-fixed-top navbar-expand-lg" style="padding: 0">
      <div class="container-fluid" style="background-color: #fff;">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                @click.prevent="$emit('view-dashboard', 'infor')"
                >Thông tin</a
              >
            </li>
            <li class="nav-item">
              <div class="dropdown">
                <div data-toggle="dropdown" role="button">
                  <span>
                    <a href="#" class="nav-link disabled">Thông tin đơn hàng</a>
                  </span>
                </div>
                <div class="dropdown-menu">
                  <a
                    class="dropdown-item"
                    href="#"
                    @click.prevent="$emit('view-dashboard', 'address')"
                    >Cập nhập địa chỉ</a
                  >
                  <a class="dropdown-item" href="#"
                    >Cập nhật hóa đơn VAT của bạn</a
                  >
                </div>
              </div>
            </li>

            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                @click.prevent="$emit('view-dashboard', 'pay')"
                >Thông tin</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
