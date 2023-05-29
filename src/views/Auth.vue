<template>
    <div class="auth">
        <Login v-if="showLogin" :changeForm="changeForm" />
        <Register v-if="!showLogin" :changeForm="changeForm" />

    </div>
</template>

<script>

import { ref } from 'vue';
import Login from "../components/Auth/Login.vue";
import Register from "../components/Auth/Register.vue";

export default {
    name: "Auth",
    components: {
        Login,
        Register
    },
    setup() {
        let showLogin = ref(true);

        const changeForm = () => {
            showLogin.value = !showLogin.value;
        };

        return {
            showLogin,
            changeForm
        };
    },
}
</script>

<style></style>