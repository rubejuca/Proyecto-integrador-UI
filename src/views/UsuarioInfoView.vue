<template>
    <div class="container-fluid">
        <div class="row flex-nowrap">
            <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                <Menu />
            </div>
            <div class="col py-3">
                <div class="container">
                    <form class="row g-3">
                        <h2>Agregar Usuarios</h2>
                        <div class="col-md-12">
                            <label for="email" class="form-label">email</label>
                            <input type="text" class="form-control" id="email" v-model="email">
                        </div>
                        <div class="col-md-12">
                            <label for="rol" class="form-label">Rol</label>
                            <select id="rol" class="form-select" v-model="rol">
                                <option value="ADMIN">ADMIN</option>
                                <option value="RECEPCIONISTA">RECEPCIONISTA</option>
                                <option value="MEDICO">MEDICO</option>
                            </select>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-primary" @click="guardar" to="/usuarios">Guardar</button>&nbsp;
                            <router-link class="btn btn-secondary" to="/usuarios">Cancelar</router-link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Menu from '../components/Menu.vue'
export default {

    name: 'Usuario',
    components: {
        Menu
    },

    props: {
        usuarioId: String
    },

    data() {
        return {
            email: [],
            rol: [],
            usuarios: [],
            usuarioId: null
        }
    },

    async mounted() {
        console.log(this.$route.params.usuarioId);
        if (this.$route.params.usuarioId != undefined) {
            const usuario = await fetch(`http://localhost:8080/api/usuarios/${this.$route.params.usuarioId}`)
                .then(response => response.json());
            this.actualizarData(usuario);
        }
    },

    methods: {
        async guardar() {
            if (this.id == undefined) {
                const response = await fetch("http://localhost:8080/api/usuarios", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: this.email,
                        rol: this.rol,
                        usuarioId: this.usuarioId,
                        usuarios: this.usuarios
                    }),
                });
                this.actualizarData(await response.json());
            } else {

                const response = await fetch(`http://localhost:8080/api/usuarios/${this.id}`, {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        id: this.id,
                        usuarioId: this.usuarioId,
                        rol: this.rol
                    }),
                });
                this.actualizarData(await response.json());
            }

            this.$router.push("/usuarios");
        },

        actualizarData(datos) {
            this.id = datos.id;
            this.email = datos.email;
            this.rol = datos.rol;

        }

    },

}
</script>

<style></style>