import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MedicosView from '../views/MedicosView.vue'
import PacientesView from '../views/PacientesView.vue'
import CitasView from '../views/CitasView.vue'
import AtencionView from '../views/AtencionView.vue'
import MedicoInfoView from '../views/MedicoInfoView.vue'
import PacientesInfoView from '../views/PacientesInfoView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
    path: '/paciente',
    name: 'paciente',
    component: PacientesInfoView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
