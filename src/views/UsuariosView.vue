<template>
    <div class="container-fluid">
        <div class="row flex-nowrap">
            <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                <Menu />
            </div>
            <div class="col py-3">
                <div class="container">
                    <table class="table table-sm table-striped table-hover">
                        <thead>
                            <th scope="col">e-mail</th>
                            <th scope="col">Tipo de Usuario</th>
                            <th scope="col">Acción</th>
                        </thead>
                        <tbody class="table table-hover ">
                            <tr v-for="usuario in usuarios" :key="usuario.id">
                                <td>{{ usuario.email }}</td>
                                <td>{{ usuario.rol }}</td>
                                <td>
                                    <a class="btn-sm btn-outline-success" @click="editar(usuario.id)">Editar</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <router-link class="btn btn-primary" to="/usuario">Agregar</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
export default {

    name: "Usuarios",
    components: {
        Menu
    },

    data() {
        return {
            usuarios: []
        }
    },

    methods: {
        async leerUsuarios() {
            const usuarios = await fetch("http://localhost:8080/api/usuarios");
            this.usuarios = await usuarios.json();
        },

        async editar(usuarioId) {
            console.log(`Editar ${usuarioId}`)
            this.$router.push({ name: "editar-usuario", params: { usuarioId: usuarioId } })
        }
    },

    mounted() {
        this.leerUsuarios();
    }

}
</script>

<style></style>