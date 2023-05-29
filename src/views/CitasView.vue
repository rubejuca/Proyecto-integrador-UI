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
                            <th scope="col">Fecha</th>
                            <th scope="col">Paciente</th>
                            <th scope="col">Medico</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Acción</th>
                        </thead>
                        <tbody class="table table-hover ">
                            <tr v-for="cita in citas" :key="cita.id">
                                <td>{{ cita.fechaHora }}</td>
                                <td>{{ cita.pacienteNombre }}</td>
                                <td>{{ cita.medicoNombre }} </td>
                                <td>{{ cita.estado }} </td>
                                <td>
                                    <a class="btn-sm btn-outline-success" href="citas.html" role="button">Editar</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <router-link class="btn btn-primary" to="/cita">Agregar</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Menu from '../components/Menu';

export default {

    name: "Citas",

    data() {
        return {
            citas: []
        }
    },

    components: {
        Menu
    },

    methods: {
        async leerCitas() {
            const citas = await fetch("http://localhost:8080/api/citas");
            this.citas = await citas.json();
        }
    },

    mounted() {
        this.leerCitas();
    }

}
</script>

<style></style>