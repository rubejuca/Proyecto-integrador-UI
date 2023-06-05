<template>
    <section class="vh-100" style="background-color: #343a40">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col col-xl-10">
                    <div class="card" style="border-radius: 1rem;">
                        <div class="row g-0">
                            <div class="col-md-6 col-lg-5 d-none d-md-block">
                                <img src="../../assets/login.jpg" alt="login form" class="img-fluid"
                                    style="border-radius: 1rem 0 0 1rem;" />
                            </div>
                            <div class="col-md-6 col-lg-7 d-flex align-items-center">
                                <div class="card-body p-4 p-lg-5 text-black">
                                    <form @submit.prevent="onLogin">
                                        <div class="d-flex align-items-center mb-3 pb-1">
                                            <i class="fas fa-cubes fa-2x me-3" style="color: #ff6219;"></i>
                                            <span class="h1 fw-bold mb-0">Log-in</span>
                                        </div>
                                        <div class="form-outline mb-4">
                                            <label for="email" class="form-label"><i class="bi bi-envelope-at-fill"></i>
                                                e-mail</label>
                                            <input type="email" class="form-control" id="email"
                                                placeholder="user@server.com" v-model="formData.email">
                                        </div>
                                        <div class="form-outline mb-4">
                                            <label for="password" class="form-label">Contraseña</label>
                                            <input id="password" name="password" type="password"
                                                placeholder="Ingresa tu contraseña" class="form-control"
                                                v-model="formData.password" />
                                        </div>
                                        <div class="pt-1 mb-4">
                                            <button class="btn btn-dark btn-lg btn-block" type="submit">Login</button>&nbsp;
                                            <button class="btn btn-dark btn-lg btn-block"
                                                @click="changeForm('REGISTER')">Sign-in</button>
                                        </div>
                                        <div>
                                            <a class="link-primary" @click="changeForm('FORGOT')">¿Olvidaste tu
                                                contraseña?</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import { doLogin } from '@/utils/firebase';

export default {

    props: {
        changeForm: Function
    },

    name: "Login",

    setup() {
        let formData = {};
        const onLogin = async () => {
            try {
                const { email, password } = formData;
                const userCredential = await doLogin(email, password);
                console.log(userCredential);
            } catch (error) {
                alert(error);
            }
        }
        return {
            formData,
            onLogin
        };
    }

}
</script>

<style lang="scss" scoped></style>