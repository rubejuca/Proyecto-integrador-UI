<template>
    <div class="container-fluid">
        <div class="row flex-nowrap">
            <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                <Menu />
            </div>
            <div class="col py-3">
                <div class="container">
                    <form class="row g-3">
                        <div class="col-md-12">
                            <label for="fechaHora" class="form-label">Fecha/Hora</label>
                            <input type="text" disabled class="form-control" id="fechaHora" v-model="fechaHora">
                        </div>
                        <div class="col-md-12">
                            <label for="medicoId" class="form-label">Medico</label>
                            <input type="text" disabled class="form-control" id="medico" v-model="medicoNombre" />
                        </div>
                        <div class="col-md-12">
                            <label for="pacienteId" class="form-label">Paciente</label>
                            <input type="text" disabled class="form-control" id="paciente" v-model="pacienteNombre" />
                        </div>
                        <div class="col-md-12">
                            <label for="motivo" class="form-label">Motivo</label>
                            <textarea class="form-control" disabled id="motivo" v-model="motivo"></textarea>
                        </div>
                        <div class="col-md-12">
                            <label for="diagnostico" class="form-label">Diagnostico</label>
                            <textarea class="form-control" id="diagnostico" v-model="diagnostico"></textarea>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-primary" @click="guardar" to="/atencion">Guardar</button>&nbsp;
                            <router-link class="btn btn-secondary" to="/atencion">Cancelar</router-link>
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

    name: "AtencionInfo",
    components: {
        Menu
    },

    props: {
        citaId: String
    },

    data() {
        return {
            id: null,
            fechaHora: null,
            medicoNombre: null,
            pacienteNombre: null,
            motivo: null,
            diagnostico: null
        };
    },

    async mounted() {

        if (this.$route.params.citaId != undefined) {
            const cita = await fetch(`http://localhost:8080/api/citas/${this.$route.params.citaId}`)
                .then(response => response.json());

            this.id = cita.id;
            this.fechaHora = cita.fechaHora;
            this.medicoNombre = cita.medicoNombre;
            this.pacienteNombre = cita.pacienteNombre;
            this.motivo = cita.motivo;
            this.diagnostico = cita.diagnostico;
        }

    },

    methods: {
        async guardar() {
            const response = await fetch(`http://localhost:8080/api/citas/${this.id}/atender`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    diagnostico: this.diagnostico
                }),
            });
            this.actualizarData(await response.json());
            this.$router.push("/atencion");
        },
    }

}
</script>

<style></style>