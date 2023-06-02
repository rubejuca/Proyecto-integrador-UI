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
                            <button class="btn btn-primary" @click="create" to="/usuarios">Guardar</button>&nbsp;
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

    data() {
        return {
            email: [],
            rol: [],
            usuarios: [],
            usuarioId: null
        }
    },

    methods: {
        async leerUsuarios() {
            const usuarios = await fetch("http://localhost:8080/api/usuarios");
            this.usuarios = await usuarios.json();
        },

        async create() {
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
            return response.json();
        }

    },

    mounted() {
        this.leerUsuarios();
    }

}
</script>

<style></style>