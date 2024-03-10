<template>
    <div class="auth">
        <Login v-if="showLogin === 'LOGIN'" :changeForm="changeForm" />
        <Register v-if="showLogin === 'REGISTER'" :changeForm="changeForm" />
        <Forgot v-if="showLogin === 'FORGOT'" :changeForm="changeForm" />
        <SeguimientoView v-if="showLogin === 'SEGUIMIENTO'" :changeForm="changeForm" />

    </div>
</template>

<script>

import { ref } from 'vue';
import Login from "../components/Auth/Login.vue";
import Register from "../components/Auth/Register.vue";
import Forgot from '@/components/Auth/Forgot.vue';
import SeguimientoView from './SeguimientoView.vue';


export default {
    name: "Auth",
    components: {
        Login,
        Register,
        Forgot,
        SeguimientoView
    },
    setup() {
        let showLogin = ref("LOGIN");

        const changeForm = (targetForm) => {
            console.log(targetForm);
            showLogin.value = targetForm;
        };

        return {
            showLogin,
            changeForm
        };
    },
}
</script>

<style></style>