<template>
    <div class="container">
        <table class="table table-sm table-striped table-hover">
            <thead>
                <th scope="col">#</th>
                <th scope="col">Doc.</th>
                <th scope="col">Nombre</th>
                <th scope="col">Telefono</th>
                <th scope="col">Acción</th>
            </thead>
            <tbody class="table table-hover ">
                <tr v-for="paciente in pacientes" :key="paciente.id">
                    <td>{{ paciente.id }}</td>
                    <td>{{ paciente.tipoDocumento }} {{ paciente.documento }}</td>
                    <td>{{ paciente.apellidos }}, {{ paciente.nombres }}</td>
                    <td>{{ paciente.telefono }}</td>
                    <td>
                        <a class="btn-sm btn-outline-success" href="paciente.html" role="button">Editar</a>
                    </td>
                </tr>
            </tbody>
        </table>
        <router-link class="btn btn-primary" to="/paciente">Agregar</router-link>
    </div>
</template>

<script>
export default {

    data() {
        return {
            pacientes: []
        }
    },

    methods: {
        async leerPacientes() {
            const pacientes = await fetch("http://localhost:8080/api/pacientes");
            this.pacientes = await pacientes.json();
        }
    },

    mounted() {
        this.leerPacientes();
    }

}
</script>

<style></style>