<template>
    <div class="container-fluid">
        <div class="row flex-nowrap">
            <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                <Menu />
            </div>
            <div class="col py-3">
                <div class="container">
                    <h2>Información del Paciente</h2>
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
                            <button class="btn btn-primary" @click="guardar">Guardar</button>&nbsp;
                            <router-link class="btn btn-secondary" to="/pacientes">Cancelar</router-link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Menu from '@/components/Menu.vue';

export default {

    name: "paciente",

    components: {
        Menu
    },

    props: {
        pacienteId: String
    },

    data() {
        return {
            id: null,
            tipoDocumento: "CC",
            documento: null,
            email: null,
            nombres: null,
            apellidos: null,
            direccion: null,
            telefono: null
        };
    },

    mounted() {
        if (this.$route.params.pacienteId != undefined) {
            this.leer(this.$route.params.pacienteId);
        }
    },

    methods: {
        async guardar() {
            if (this.id == undefined) {
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
                this.actualizarData(await response.json());

            } else {
                const response = await fetch(`http://localhost:8080/api/pacientes/${this.id}`, {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        id: this.id,
                        tipoDocumento: this.tipoDocumento,
                        documento: this.documento,
                        email: this.email,
                        nombres: this.nombres,
                        apellidos: this.apellidos,
                        direccion: this.direccion,
                        telefono: this.telefono
                    }),
                });
                this.actualizarData(await response.json());
            }

            this.$router.push("/pacientes");
        },

        async leer(pacienteId) {
            const response = await fetch(`http://localhost:8080/api/pacientes/${pacienteId}`);
            this.actualizarData(await response.json());
        },

        actualizarData(datos) {
            this.id = datos.id
            this.tipoDocumento = datos.tipoDocumento;
            this.documento = datos.documento;
            this.email = datos.email;
            this.nombres = datos.nombres;
            this.apellidos = datos.apellidos;
            this.direccion = datos.direccion;
            this.telefono = datos.telefono;
        }
    }
}
</script>

<style></style>