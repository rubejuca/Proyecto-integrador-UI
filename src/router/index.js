import { createRouter, createWebHashHistory } from 'vue-router'
import MedicosView from '../views/MedicosView.vue'
import PacientesView from '../views/PacientesView.vue'
import CitasView from '../views/CitasView.vue'
import CitaInfoView from '../views/CitaInfoView.vue'
import AtencionView from '../views/AtencionView.vue'
import AtencionInfoView from '../views/AtencionInfoView.vue'
import MedicoInfoView from '../views/MedicoInfoView.vue'
import PacientesInfoView from '../views/PacientesInfoView.vue'
import UsuariosView from '../views/UsuariosView.vue'
import UsuarioInfoView from '../views/UsuarioInfoView.vue'
import Forgot from '../components/Auth/Forgot.vue'
import AboutView from '../views/AboutView.vue'
import SeguimientoView from '../views/SeguimientoView.vue'

const routes = [
  {
    path: '/',
    name: 'about',
    component: AboutView
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
    path: '/atencion/:citaId',
    name: 'atencion-cita',
    component: AtencionInfoView,
    props: true
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
    path: '/atencion',
    name: 'atencion',
    component: AtencionView
  },
  {
    path: "/cita/:citaId",
    name: 'info-cita',
    component: CitaInfoView,
    props: true
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
  },
  {
    path: '/usuario/:usuarioId',
    name: 'editar-usuario',
    component: UsuarioInfoView,
    props: true
  },
  {
    path: '/forgot',
    component: Forgot
  },
  {
    path: '/seguimiento/:pacienteId',
    component: SeguimientoView
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
