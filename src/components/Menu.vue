<template>
  <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
    <a class="text-white d-none d-sm-inline text-decoration-none d-flex aling-items-center ms-4" role="button">
      <span class="fs-5">SITAP</span>
    </a>
    <hr class="text-white d-none d-sm-block" />
    <ul class="nav nav-pills flex-column mt-4 mt-sm-0" id="menu">
      <li class="nav-item my-sm-1 my-2">
        <a href="#" class="nav-link text-white text-center text-sm-start" aria-current="page">
          <span class="ms-2 d-none d-sm-inline"><i class="bi bi-speedometer"></i>
            Dashboard</span>
        </a>
      </li>
      <template v-if="permisos && permisos.includes('MENU_MEDICOS')">
        <li class="nav-item">
          <a class="nav-link text-white" aria-current="page">
            <router-link class="nav-link text-white" to="/medicos"><i class="bi bi-person-lines-fill"></i>
              Medicos</router-link>
          </a>
        </li>
      </template>
      <template v-if="permisos && permisos.includes('MENU_PACIENTES')">
        <li class="nav-item disabled">
          <a href="#sidemenu" data-bs-toggle="collapse" class="nav-link text-white text-center text-sm-start"
            aria-current="page">
            <router-link class="nav-link text-white" to="/pacientes"><i class="bi bi-person-lines-fill"></i>
              Pacientes</router-link>
          </a>
        </li>
      </template>
      <template v-if="permisos && permisos.includes('MENU_CITAS')">
        <li class="nav-item my-sm-1 my-2">
          <a href="#" class="nav-link text-white" aria-current="page">
            <i class="fa fa-users"></i>
            <router-link class="nav-link text-white" to="/citas"><i class="bi bi-person-lines-fill"></i>
              Citas</router-link>
          </a>
        </li>
      </template>
      <template v-if="permisos && permisos.includes('MENU_REGISTRO')">
        <li class="nav-item my-sm-1 my-2">
          <a href="#" class="nav-link text-white" aria-current="page">
            <i class="fa fa-users"></i>
            <router-link class="nav-link text-white" to="/usuarios"><i class="bi bi-person-lines-fill"></i>
              Registro</router-link>
          </a>
        </li>
      </template>
      <template v-if="permisos && permisos.includes('MENU_ATENCION')">
        <li class="nav-item my-sm-1 my-2">
          <a href="#" class="nav-link text-white" aria-current="page">
            <i class="fa fa-users"></i>
            <router-link class="nav-link text-white" to="/Atencion"><i class="bi bi-person-lines-fill"></i>
              Atención Citas</router-link>
          </a>
        </li>
      </template>
      <li class="nav-item my-sm-1 my-2">
        <a href="#" class="nav-link text-white" aria-current="page">
          <i class="fa fa-users"></i>
          <button class="nav-link text-white" @click="logout"><i class="bi bi-box-arrow-left"></i>
            Salir</button>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

import { onMounted, computed, ref } from 'vue';
import { doLogout } from '@/utils/firebase';
import { useStore } from 'vuex';

export default {

  methods: {
    async logout() {
      try {
        console.log("Saliendo")
        await doLogout();
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    }
  },

  setup() {
    const store = useStore();
    const userEmail = store.state.user.email;
    console.log(userEmail);
    const permisos = ref(null);

    const pedirPermisos = async () => {
      permisos.value = await fetch("http://localhost:8080/api/usuarios/permisos?" + new URLSearchParams({ email: userEmail }))
        .then(response => response.json())
    };

    pedirPermisos();

    return { permisos };
  },

  pedirPermisos() {
    return permisos;
  }

};
</script>

<style lang="scss" scoped>
.nav-pills li a:hover {
  background-color: rgb(82, 8, 255);
}
</style>


