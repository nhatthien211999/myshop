<template>
  <v-container fluid>
    <v-form>
      <v-row>
        <v-col cols="12">
          <v-combobox
            :items="items"
            label="Phương thức thanh toán"
            outlined
            dense
          ></v-combobox>
        </v-col>
        <v-col align="center" justify="space-around">
          <v-btn tile color="success">
            <v-icon left>
              mdi-pencil
            </v-icon>
            Cập nhập
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      items: ["Tiền mặc", "Ví momo", "Zalo pay", "Banking"],
    };
  },
};
</script>
