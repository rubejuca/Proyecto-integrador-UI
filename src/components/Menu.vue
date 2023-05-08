<template>
  <!--
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
     <div class="container-fluid">
      <a class="navbar-brand" href="#">SITAP</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link" to="/medicos">Medicos</router-link>
          <router-link class="nav-link" to="/pacientes">Pacientes</router-link>
          <router-link class="nav-link" to="/citas">Citas</router-link>
          <router-link class="nav-link" to="/atencion">Atención</router-link>
        </div>
      </div>
    </div>
  </nav>
 -->
  <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
    <a class="text-white d-none d-sm-inline text-decoration-none d-flex aling-items-center ms-4" role="button">
      <span class="fs-5">SITAP</span>
    </a>
    <hr class="text-white d-none d-sm-block" />
    <ul class="nav nav-pills flex-column mt-4 mt-sm-0" id="menu">
      <li class="nav-item my-sm-1 my-2">
        <a href="#" class="nav-link text-white text-center text-sm-start" aria-current="page">
          <i class="fa fa-gauge"></i>
          <span class="ms-2 d-none d-sm-inline">Dashboard</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-white" aria-current="page">
          <i class="fa fa-house"></i>
          <router-link class="nav-link text-white" to="/medicos">Medicos</router-link>
        </a>
      </li>
      <li class="nav-item disabled">
        <a href="#sidemenu" data-bs-toggle="collapse" class="nav-link text-white text-center text-sm-start"
          aria-current="page">
          <i class="fa fa-table"></i>
          <router-link class="nav-link text-white" to="/pacientes">Pacientes</router-link>
        </a>
      </li>
      <li class="nav-item my-sm-1 my-2">
        <a href="#" class="nav-link text-white" aria-current="page">
          <i class="fa fa-users"></i>
          <router-link class="nav-link text-white" to="/citas">Citas</router-link>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.nav-pills li a:hover {
  background-color: blue;
}
</style>


