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
      <li class="nav-item">
        <a class="nav-link text-white" aria-current="page">
          <router-link class="nav-link text-white" to="/medicos"><i class="bi bi-person-lines-fill"></i>
            Medicos</router-link>
        </a>
      </li>
      <li class="nav-item disabled">
        <a href="#sidemenu" data-bs-toggle="collapse" class="nav-link text-white text-center text-sm-start"
          aria-current="page">

          <router-link class="nav-link text-white" to="/pacientes"><i class="bi bi-person-lines-fill"></i>
            Pacientes</router-link>
        </a>
      </li>
      <li class="nav-item my-sm-1 my-2">
        <a href="#" class="nav-link text-white" aria-current="page">
          <i class="fa fa-users"></i>
          <router-link class="nav-link text-white" to="/citas"><i class="bi bi-person-lines-fill"></i>
            Citas</router-link>
        </a>
      </li>
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
import { doLogout } from '@/utils/firebase';

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
  }

};
</script>

<style lang="scss" scoped>
.nav-pills li a:hover {
  background-color: rgb(82, 8, 255);
}
</style>


