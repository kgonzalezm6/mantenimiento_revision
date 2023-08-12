<template>
  <v-container>
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-img
        contain
        height="300"
        src="@/assets/logo.svg"
      />

      <v-sheet width="400" class="mx-auto">
        <v-form fast-fail @submit.prevent="login">
            <v-text-field v-model="username" label="Usuario"></v-text-field>

            <v-text-field v-model="password" label="Contraseña"></v-text-field>
            <a href="https://udicat.muniguate.com/catastro/GestionServicios/change_password.php" class="text-body-2 font-weight-regular">¿Olvido su contraseña?</a>

            <v-btn type="submit" color="primary" block class="mt-2">Ingresar <v-icon>mdi-login</v-icon> </v-btn>

        </v-form>
    </v-sheet>
    </v-responsive>
  </v-container>
</template>

<script setup>
  import { ref } from 'vue';

  const username = ref('')
  const password = ref('')


  function login() {

  }
</script>
