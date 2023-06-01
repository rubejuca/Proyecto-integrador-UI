import { createRouter, createWebHashHistory } from 'vue-router'
import MedicosView from '../views/MedicosView.vue'
import PacientesView from '../views/PacientesView.vue'
import CitasView from '../views/CitasView.vue'
import CitaInfoView from '../views/CitaInfoView.vue'
import AtencionView from '../views/AtencionView.vue'
import MedicoInfoView from '../views/MedicoInfoView.vue'
import PacientesInfoView from '../views/PacientesInfoView.vue'
import UsuariosView from '../views/UsuariosView.vue'
import UsuarioInfoView from '../views/UsuarioInfoView.vue'

const routes = [
  {
    path: '/',
    component: MedicosView
  },
  {
    path: '/medicos',
    name: 'medicos',
    component: MedicosView
  },
  {
    path: '/medico',
    name: 'medico',
    component: MedicoInfoView
  },
  {
    path: '/pacientes',
    name: 'pacientes',
    component: PacientesView
  },
  {
    path: '/atencion',
    name: 'atencion',
    component: AtencionView
  },
  {
    path: '/paciente',
    name: 'paciente',
    component: PacientesInfoView
  },
  {
    path: '/paciente/:pacienteId',
    name: 'editar-paciente',
    component: PacientesInfoView,
    props: true
  },
  {
    path: '/medico/:medicoId',
    name: 'editar-medico',
    component: MedicoInfoView,
    props: true
  },
  {
    path: '/cita',
    name: 'cita',
    component: CitaInfoView
  },
  {
    path: '/citas',
    name: 'citas',
    component: CitasView
  },
  {
    path: '/usuarios',
    name: 'usuarios',
    component: UsuariosView
  },
  {
    path: '/usuario',
    name: 'usuario',
    component: UsuarioInfoView
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
