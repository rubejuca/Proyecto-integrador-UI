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
                            <th scope="col">e-mail</th>
                            <th scope="col">Acción</th>
                        </thead>
                        <tbody class="table table-hover ">
                            <tr v-for="medico in medicos" :key="medico.id">
                                <td>{{ medico.tipoDocumento }} {{ medico.documento }}</td>
                                <td>{{ medico.apellidos }}, {{ medico.nombres }}</td>
                                <td>{{ medico.telefono }}</td>
                                <td>{{ medico.email }}</td>
                                <td>
                                    <a class="btn-sm btn-outline-success" @click="editar(medico.id)">Editar</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <router-link class="btn btn-primary" to="/medico">Agregar</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Menu from '../components/Menu';

export default {
    name: "Medicos",
    components: {
        Menu
    },

    data() {
        return {
            medicos: []
        }
    },

    methods: {
        async leerMedicos() {
            const medicos = await fetch("http://localhost:8080/api/medicos");
            this.medicos = await medicos.json();
        },

        async editar(medicoId) {
            console.log(`Editar ${medicoId}`)
            this.$router.push({ name: "editar-medico", params: { medicoId: medicoId } })
        },

        async leerEspecialidades() {
            const especialidades = await fetch("http://localhost:8080/api/especialidades");
            this.especialidades = await especialidades.json();
        },

        async editarEspecialidad(especialidad) {
            console.log(`Editar ${especialidad}`)
            this.$router.push({ name: "editar-especialidad", params: { especialidad: especialidad } })
        }
    },

    mounted() {
        this.leerMedicos();
        this.leerEspecialidades();
    }
}
</script>

<style></style>