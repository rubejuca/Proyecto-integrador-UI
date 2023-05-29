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
                            <input type="text" class="form-control" id="fechaHora" v-model="fechaHora">
                        </div>
                        <div class="col-md-12">
                            <label for="medicoId" class="form-label">Medico</label>
                            <select id="medicoId" class="form-select" v-model="medicoId">
                                <option v-for="medico in medicos" :key="medico.id" :value="medico.id">{{ medico.apellidos
                                }}, {{ medico.nombres }}</option>

                            </select>
                        </div>
                        <div class="col-md-12">
                            <label for="pacienteId" class="form-label">Paciente</label>
                            <select id="pacienteId" class="form-select" v-model="pacienteId">
                                <option v-for="paciente in pacientes" :key="paciente.id" :value="paciente.id">{{
                                    paciente.apellidos
                                }}, {{ paciente.nombres }}</option>
                            </select>
                        </div>
                        <div class="col-md-12">
                            <label for="motivo" class="form-label">Motivo</label>
                            <textarea class="form-control" id="motivo" v-model="motivo"></textarea>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-primary" @click="create" to="/citas">Guardar</button>&nbsp;
                            <router-link class="btn btn-secondary" to="/citas">Cancelar</router-link>
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

    name: "Cita",
    components: {
        Menu
    },

    data() {
        return {
            medicos: [],
            pacientes: [],
            medicoId: null,
            pacienteId: null,
            fechaHora: null,
            motivo: null
        }
    },

    methods: {
        async leerMedicos() {
            const medicos = await fetch("http://localhost:8080/api/medicos");
            this.medicos = await medicos.json();
        },

        async leerPacientes() {
            const pacientes = await fetch("http://localhost:8080/api/pacientes");
            this.pacientes = await pacientes.json();
        },

        async create() {
            console.log('Enviando al backend');
            const response = await fetch("http://localhost:8080/api/citas", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fechaHora: this.fechaHora,
                    pacienteId: this.pacienteId,
                    medicoId: this.medicoId,
                    motivo: this.motivo
                }),
            });
            return response.json();
        }

    },

    mounted() {
        this.leerMedicos();
        this.leerPacientes();
    }
}
</script>

<style></style>