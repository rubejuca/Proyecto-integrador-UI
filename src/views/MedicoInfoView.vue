<template>
    <div class="container-fluid">
        <div class="row flex-nowrap">
            <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                <Menu />
            </div>
            <div class="col py-3">
                <div class="container">
                    <form class="row g-3">
                        <h2>Registro de Médicos</h2>
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
                        <div class="col-md-3">
                            <label for="especialidad" class="form-label">Especialidad</label>
                            <select id="especialidad" class="form-select" v-model="especialidad">
                                <option value="1">Medicina General</option>
                                <option value="2">Psicólogia</option>
                                <option value="3">Psiquiatría</option>
                                <option value="4">Nutrición</option>
                                <option value="5">Fisiterapia</option>
                            </select>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-primary" @click="guardar">Guardar</button>&nbsp;
                            <router-link class="btn btn-secondary" to="/medicos">Cancelar</router-link>
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

    name: "Medico",
    components: {
        Menu,
    },

    props: {
        medicoId: String
    },

    data() {
        return {
            especialidad: "1",
            documento: null,
            tipoDocumento: "CC",
            nombres: null,
            apellidos: null,
            email: null,
            telefono: null,
            direccion: null
        };
    },

    async mounted() {
        console.log(this.$route.params.medicoId);
        if (this.$route.params.medicoId != undefined) {
            const medico = await fetch(`http://localhost:8080/api/medicos/${this.$route.params.medicoId}`)
                .then(response => response.json());
            this.actualizarData(medico);
        }
    },

    methods: {
        async guardar() {
            if (this.id == undefined) {
                const response = await fetch("http://localhost:8080/api/medicos", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"

                    },
                    body: JSON.stringify({
                        especialidad: this.especialidad,
                        documento: this.documento,
                        tipoDocumento: this.tipoDocumento,
                        nombres: this.nombres,
                        apellidos: this.apellidos,
                        email: this.email,
                        telefono: this.telefono,
                        direccion: this.direccion
                    }),
                });
                this.actualizarData(await response.json());
            } else {

                const response = await fetch(`http://localhost:8080/api/medicos/${this.id}`, {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        id: this.id,
                        especialidad: this.especialidad,
                        documento: this.documento,
                        tipoDocumento: this.tipoDocumento,
                        nombres: this.nombres,
                        apellidos: this.apellidos,
                        email: this.email,
                        telefono: this.telefono,
                        direccion: this.direccion
                    }),
                });
                this.actualizarData(await response.json());
            }

            this.$router.push("/medicos");
        },

        actualizarData(datos) {
            this.id = datos.id
            this.especialidad = datos.especialidad;
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