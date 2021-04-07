<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <v-text-field
            v-model="phone"
            :counter="10"
            label="Phone"
            required
          ></v-text-field>
        </v-col>
        <v-col align="center" justify="space-around">
          <v-btn tile color="success">
            <v-icon left>
              mdi-pencil
            </v-icon>
            Change Phone
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
export default {
  data: () => ({
    valid: false,
    phone: "",
  }),
};
</script>
