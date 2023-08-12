<template>
  <v-container>
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-img contain height="300" src="@/assets/logo.svg" />

      <v-sheet width="400" class="mx-auto">
        <v-form fast-fail @submit.prevent="login">
          <v-text-field v-model="ingreso.login.username" label="Usuario" hint="Ingrese su usuario" persistent-hint
            clearable />
            <span v-if="validationMessages.username">Campo obligatorio</span>
            <span v-else>Contraseña válida</span>
            {{ validationMessages }}
          <div>
            <v-text-field
              v-model="ingreso.login.password"
              label="Contraseña"
              hint="Ingrese su contraseña"

              clearable
              type="password"
            />
            <span v-if="validationMessages.password == true">Exito!</span>
            <span v-else>Campo obligatorio</span>
            {{ validationMessages.password }}
          </div>
          <a href="https://udicat.muniguate.com/catastro/GestionServicios/change_password.php"
            class="text-body-2 font-weight-regular">¿Olvido su contraseña?</a>

          <v-btn type="submit" color="primary" block class="mt-2">Ingresar <v-icon>mdi-login</v-icon> </v-btn>

        </v-form>
      </v-sheet>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { computed } from 'vue';
import { useIngresoStore } from '@/store/ingreso';


const ingreso = useIngresoStore()
const validations = {
  isRequired: value => !!value || false,
  // Otros métodos de validación aquí
};

const validationMessages = {
  password: computed(() => ingreso.login.password ? true : [validations.isRequired(ingreso.login.password)]),
  username: computed(() => ingreso.login.username ? true : [validations.isRequired(ingreso.login.username)])
};
//function login() {}

</script>

