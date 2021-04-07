<template lang="">
  <div class="container-fluid" style="padding:0;">
    <TopBar></TopBar>

    <v-card class="mx-auto" max-width="1000" tile>
      <v-img
        height="200"
        src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
      ></v-img>
      <v-row style="margin:2.5%;position:absolute; top: 130px">
        <v-list-item>
          <v-list-item-avatar size="100">
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="John"
            />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title" style="margin-top:20px;"
              >Injamamul Haque Sonet</v-list-item-title
            >
            <v-list-item-subtitle
              >Software Engineer | dokanee</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-row>
    </v-card>
    <div style="margin: 100px 100px 50px 100px">
      <MenuInfo v-on:view-dashboard="setActive"></MenuInfo>
    </div>
    <div v-if="active.infor">
      <div style="margin: 0px 100px 50px 100px">
        <v-card>
          <FormInput></FormInput>
        </v-card>
      </div>

      <div style="margin: 0 100px 100px 100px">
        <v-card>
          <FormPhone></FormPhone>
        </v-card>
      </div>
    </div>
    <div v-if="active.address">
      <div style="margin: 0px 100px 50px 100px">
        <v-card>
          <FormInputAddress></FormInputAddress>
        </v-card>
      </div>
    </div>
    <div v-if="active.pay">
      <div style="margin: 0px 100px 50px 100px">
        <v-card>
          <Pay></Pay>
        </v-card>
      </div>
    </div>
  </div>
</template>
<script>
import TopBar from "../components/Topbar";

import MenuInfo from "../components/profile/MenuInfo";
import FormInput from "../components/profile/FormInput";
import FormPhone from "../components/profile/FormPhone";
import FormInputAddress from "../components/profile/FormInputAddress";
import Pay from "../components/profile/Pay";

export default {
  components: {
    TopBar,
    FormInput,
    FormPhone,
    MenuInfo,
    FormInputAddress,
    Pay,
  },
  data() {
    return {
      active: {
        infor: true,
        address: false,
        pay: false,
      },
    };
  },
  methods: {
    setActive: function(component) {
      Object.keys(this.active).forEach((key) => (this.active[key] = false));
      this.active[component] = true;
    },
  },
};
</script>
<style lang=""></style>
