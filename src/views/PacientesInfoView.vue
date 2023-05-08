<template>
    <div class="container">
        <form class="row g-3">
            <div class="col-md-3">
                <label for="tipoDocumento" class="form-label">Tipo de documento</label>
                <select id="tipoDocumento" class="form-select" v-model="tipoDocumento">
                    <option value="CC">Cédula de ciudadanía</option>
                    <option value="PP">Pasaporte</option>
                    <option value="CE">Cédula de extranjería</option>
                    <option value="TI">Tarjeta de identidad</option>
                </select>
            </div>
            <div class="col-md-3">
                <label for="documento" class="form-label">Documento</label>
                <input type="text" class="form-control" id="documento" v-model="documento">
            </div>
            <div class="col-md-6">
                <label for="email" class="form-label">e-mail</label>
                <input type="email" class="form-control" id="email" v-model="email">
            </div>

            <div class="col-6">
                <label for="nombres" class="form-label">Nombres</label>
                <input type="text" class="form-control" id="nombres" v-model="nombres">
            </div>
            <div class="col-6">
                <label for="apellidos" class="form-label">Apellidos</label>
                <input type="text" class="form-control" id="apellidos" v-model="apellidos">
            </div>

            <div class="col-8">
                <label for="direccion" class="form-label">Direccion</label>
                <input type="text" class="form-control" id="direccion" v-model="direccion">
            </div>
            <div class="col-4">
                <label for="telefono" class="form-label">Telefono</label>
                <input type="text" class="form-control" id="telefono" v-model="telefono">
            </div>
            <div class="col-12">
                <button class="btn btn-primary" @click="create">Guardar</button>&nbsp;
                <router-link class="btn btn-secondary" to="/pacientes">Cancelar</router-link>
            </div>
        </form>
    </div>
</template>

<script>
export default {

    data() {
        return {
            tipoDocumento: "CC",
            documento: null,
            email: null,
            nombres: null,
            apellidos: null,
            direccion: null,
            telefono: null
        };
    },

    methods: {
        async create() {
            console.log(`Hola ${this.documento}`);
            const response = await fetch("http://localhost:8080/api/pacientes", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    tipoDocumento: this.tipoDocumento,
                    documento: this.documento,
                    email: this.email,
                    nombres: this.nombres,
                    apellidos: this.apellidos,
                    direccion: this.direccion,
                    telefono: this.telefono
                }),
            });
            return response.json();
        }
    }
}
</script>

<style></style>