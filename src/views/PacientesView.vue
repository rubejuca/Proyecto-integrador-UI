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
                            <th scope="col">Doc.</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Acción</th>
                        </thead>
                        <tbody class="table table-hover ">
                            <tr v-for="paciente in pacientes" :key="paciente.id">
                                <td>{{ paciente.tipoDocumento }} {{ paciente.documento }}</td>
                                <td>{{ paciente.apellidos }}, {{ paciente.nombres }}</td>
                                <td>{{ paciente.telefono }}</td>
                                <td>
                                    <a class="btn-sm btn-outline-success" @click="editar(paciente.id)">Editar</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <router-link class="btn btn-primary" to="/paciente">Agregar</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Menu from '@/components/Menu.vue';

export default {
    name: "Pacientes",
    components: {
        Menu
    },

    data() {
        return {
            pacientes: []
        }
    },

    methods: {
        async leerPacientes() {
            const pacientes = await fetch("http://localhost:8080/api/pacientes");
            this.pacientes = await pacientes.json();
        },

        async editar(pacienteId) {
            console.log(`Editar ${pacienteId}`)
            this.$router.push({ name: "editar-paciente", params: { pacienteId: pacienteId } })
        }
    },

    mounted() {
        this.leerPacientes();
    }

}
</script>

<style></style>