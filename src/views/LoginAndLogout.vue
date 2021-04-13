<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height bg" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center display-2 blue--text text--lighten-3"
                        >
                          Đăng nhập để thưởng thức nhiều hơn
                        </h1>
                        <div class="text-center mt-4">
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-facebook-f</v-icon>
                          </v-btn>

                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-google-plus-g</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-linkedin-in</v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mt-4">
                          Đăng ký tài khoản bằng email
                        </h4>
                        <v-form>
                          <v-text-field
                            label="Email"
                            name="Email"
                            prepend-icon="email"
                            type="text"
                            color="blue lighten-2"
                          />

                          <v-text-field
                            id="password"
                            label="Password"
                            name="password"
                            prepend-icon="lock"
                            type="password"
                            color="blue lighten-2"
                          />
                        </v-form>
                        <h3 class="text-center mt-4">Quên mật khẩu ?</h3>
                      </v-card-text>
                      <div class="text-center mt-3" style="padding: 10px">
                        <v-btn rounded color="blue lighten-2" dark
                          >Đăng Nhập</v-btn
                        >
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" class="blue lighten-2">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Chào bạn,</h1>
                        <h5 class="text-center">
                          Hãy đăng ký và trở thành thành viên của gia đình chúng
                          tôi
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step++"
                          >Đăng ký</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="blue lighten-2">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Welcome Back!</h1>
                        <h5 class="text-center">
                          Bạn đã có tài khoản
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step--"
                          >Đăng nhập</v-btn
                        >
                      </div>
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center display-2 blue--text text--lighten-3"
                        >
                          Tạo tài khoản
                        </h1>
                        <div class="text-center mt-4">
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-facebook-f</v-icon>
                          </v-btn>

                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-google-plus-g</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fab fa-linkedin-in</v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mt-4">
                          Đăng ký tài khoản bằng email
                        </h4>
                        <v-form>
                          <v-text-field
                            label="Name"
                            name="Name"
                            prepend-icon="person"
                            type="text"
                            color="blue lighten-2"
                          />
                          <v-text-field
                            label="Email"
                            name="Email"
                            prepend-icon="email"
                            type="text"
                            color="blue lighten-2"
                          />

                          <v-text-field
                            id="password"
                            label="Password"
                            name="password"
                            prepend-icon="lock"
                            type="password"
                            color="blue lighten-2"
                          />
                        </v-form>
                        <h3 class="text-center mt-4">Đăng ký ngay</h3>
                      </v-card-text>
                      <div class="text-center mt-n5" style="padding: 10px">
                        <v-btn rounded color="blue lighten-2" dark
                          >Đăng ký</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    step: 1,
  }),
};
</script>
<style scoped>
.bg {
  background-image: url(https://www.now.vn/app/assets/img/main-banner.jpg?45bff8c9ec408a5ba51f9fdef662324e);
}
</style>
