<template>
    <div class="container">
        <table class="table table-sm table-striped table-hover">
            <thead>
                <th scope="col">#</th>
                <th scope="col">Doc.</th>
                <th scope="col">Nombre</th>
                <th scope="col">Telefono</th>
                <th scope="col">e-mail</th>
                <th scope="col">Acción</th>
            </thead>
            <tbody class="table table-hover ">
                <tr v-for="medico in medicos" :key="medico.id">
                    <td>{{ medico.id }}</td>
                    <td>{{ medico.tipoDocumento }} {{ medico.documento }}</td>
                    <td>{{ medico.apellidos }}, {{ medico.nombres }}</td>
                    <td>{{ medico.telefono }}</td>
                    <td>{{ medico.email }}</td>
                    <td>
                        <a class="btn-sm btn-outline-success" href="medico.html" role="button">Editar</a>
                    </td>
                </tr>
            </tbody>
        </table>
        <router-link class="btn btn-primary" to="/medico">Agregar</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            medicos: []
        }
    },

    methods: {
        async leerMedicos() {
            const medicos = await fetch("http://localhost:8080/api/medicos");
            this.medicos = await medicos.json();
        }
    },

    mounted() {
        this.leerMedicos();
    }
}
</script>

<style></style>